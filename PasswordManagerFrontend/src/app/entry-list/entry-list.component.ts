import { Component, OnInit } from '@angular/core';
import {Entry} from "../entry";
import {EntryService} from "../entry.service"
import {Router} from "@angular/router";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  public entries: Entry[] = [];
  loading: boolean = false;
  display: boolean = false;
  selectEntry: Entry = new Entry();

  constructor(
    private entryService: EntryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.entryService.findAll().subscribe(data => {
      this.entries = data;
    });
  }

  onDialogHide() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/entries'])
    });

  }

  deleteEntry(id: number) {
    this.entryService.delete(id).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl("/", {skipLocationChange: true}).then(() => {
        this.router.navigate(['/entries'])
      })
    })
  }

  editEntry(selectEntry: Entry) {
      this.entryService.edit(selectEntry).subscribe(data => console.log(selectEntry.id))
      this.display = false
  }

  showTaskEdit(entry: Entry) {
    this.selectEntry = entry;
    this.display = true;
  }

  checkTaskIsValid() {
    return !(this.selectEntry.title.length > 0 && this.selectEntry.password.length > 0 && this.selectEntry.loginText.length > 0)
  }



  copyPassword(password: string) {
    navigator.clipboard.writeText(password).then().catch(e => console.error(e));
  }
}
