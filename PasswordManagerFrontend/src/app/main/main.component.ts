import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
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
}
