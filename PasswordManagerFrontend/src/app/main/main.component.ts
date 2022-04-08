import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
  }

  listEntriesButtonText: string = 'List Entries';
  addEntryButtonText: string = 'Add Entry';
  logoutButtonText: string = 'Logout';
  logoutURL: string = 'http://localhost:8080/api/v1/auth/logout';

  username: any = sessionStorage.getItem('username');

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.ResizeComponent();
  }

  goToEntries() {
    this.router.navigate(['/main/entries'])
  }



  goToHome() {
    this.router.navigate(['/main/'])
  }


  logout() {
    sessionStorage.removeItem('username');
    this.router.navigate(['/login'])
    this.http.get(this.logoutURL);
  }

  ResizeComponent(){
    if (window.innerWidth < 900) {
      this.listEntriesButtonText = '';
      this.addEntryButtonText = '';
      this.logoutButtonText = '';
    } else {
      this.listEntriesButtonText = 'List Entries';
      this.addEntryButtonText = 'Add Entry';
      this.logoutButtonText = 'Logout';
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.ResizeComponent();
  }

}
