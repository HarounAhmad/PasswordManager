import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppServiceService} from "../app-service.service";
import {Message} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  private url: string = "http://localhost:8080/api/v1/auth/login";
  msgs: Message[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.msgs = [];
  }

  ngOnInit() {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('loggedIn', 'false');
    sessionStorage.setItem('username', '');
  }

  login() {
    this.http.post<Observable<boolean>>(this.url + "/" + this.model.username + "/" + this.model.password, {
      userName: this.model.username,
      password: this.model.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.model.username + ':' + this.model.password)
        );
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('username', this.model.username);
        this.router.navigate(['main']);
      } else {
        this.showLoginFailed();
        sessionStorage.setItem('loggedIn', 'false');

      }
    });

  }

  showLoginFailed(){
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Login Failed', detail:'Username or password is incorrect'});
  }

  hideLoginFailed(){
    this.msgs = [];
  }



  checkEntryIsValid(): boolean {
    return (this.model.username == null || this.model.password == null);
  }

  SignUp() {
    this.router.navigate(['signup']);
  }
}
