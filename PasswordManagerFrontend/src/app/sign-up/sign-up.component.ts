import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Message} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model: any = {};
  private url: string = "http://pm-backend:8080/api/v1/auth/signup";
  msgs: Message[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.msgs = [];
  }
  ngOnInit(): void {
  }

  SignUp() {
    this.http.post<Observable<boolean>>(this.url + "/" + this.model.username + "/" + this.model.password, {
      userName: this.model.username,
      password: this.model.password
    }).subscribe(isValid => {
      if (isValid) {
        this.router.navigate(['/login']);
      } else {
        this.showLoginFailed();

      }
    });
  }

  validate(): boolean{
    return (this.model.username == null || this.model.password == null || this.model.confirmPassword == null || this.model.confirmPassword != this.model.password);
  }

  private showLoginFailed() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'SignUp Failed', detail:'Username is taken'});
  }
}
