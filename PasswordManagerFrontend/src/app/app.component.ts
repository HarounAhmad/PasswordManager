import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EntryService} from "./entry.service";
import {Entry} from "./entry";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordManagerFrontend';



  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  goToEntries() {
    this.router.navigate(['/entries'])
  }

  goToAddNewEntry() {
    this.router.navigate(['/newEntry'])
  }

  goToHome() {
    this.router.navigate(['/'])
  }
}
