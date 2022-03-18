import { Component, OnInit } from '@angular/core';
import {Entry} from "../entry";
import {ActivatedRoute, Router} from "@angular/router";
import {EntryService} from "../entry.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  entry: Entry;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entryService: EntryService
    ) {
    this.entry = new Entry();
  }

  onSubmit(){
    this.entryService.save(this.entry).subscribe(result => this.goToEntryList());
  }

  goToEntryList(){
    this.router.navigate(['/entries'])
  }

  checkEntryIsValid(){
    return !(this.entry.title.length > 0 && this.entry.loginText.length > 0 && this.entry.password.length > 0)
  }

  onEnter() {
    this.onSubmit();
  }

}
