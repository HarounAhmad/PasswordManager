import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  listEntriesButtonText: string = 'List Entries';
  addEntryButtonText: string = 'Add Entry';
  logoutButtonText: string = 'Logout';


  username: any = sessionStorage.getItem('username');

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.ResizeComponent();
  }

  goToEntries() {
    this.router.navigate(['/main/entries'])
  }

  goToAddNewEntry() {
    this.router.navigate(['/main/newEntry'])
  }

  goToHome() {
    this.router.navigate(['/main/'])
  }


  logout() {
    sessionStorage.removeItem('username');
    this.router.navigate(['/login'])
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
