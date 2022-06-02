import {Component, HostListener, OnInit} from '@angular/core';
import {Entry} from "../entry";
import {EntryService} from "../entry.service"
import {Router} from "@angular/router";
import {Clipboard} from "@angular/cdk/clipboard";
import {MenuItem, Message} from "primeng/api";
import {Table} from "primeng/table";
import {stringify} from "@angular/compiler/src/util";

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
  innerWidth: any;

  SaveButtonText: string = "Save";
  CancelButtonText: string = "Cancel";

  entry: Entry;

  displayNewEntryDialog: boolean = false;



  constructor(
    private entryService: EntryService,
    private router: Router,
  ) {
    this.entry = new Entry();
  }

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
      this.router.navigate(['/main/entries'])
    });

  }

  deleteEntry(id: number) {
    this.entryService.delete(id).subscribe(data => {
      this.router.navigateByUrl("/", {skipLocationChange: true}).then(() => {
        this.router.navigate(['/main/entries'])
      })
    })
  }

  editEntry(selectEntry: Entry) {
      this.entryService.edit(selectEntry).subscribe()
      this.display = false
  }

  showEntryEdit(entry: Entry) {
    this.selectEntry = entry;
    this.display = true;
  }

  showNewEntryDialog() {
    this.displayNewEntryDialog = true;
  }

  newEntry() {
    this.entryService.save(this.entry).subscribe()
    this.displayNewEntryDialog = false;
    this.entry = new Entry();
  }
  checkNewEntryIsValid() {
    return !(this.entry.title.length > 0 && this.entry.password.length > 0 && this.entry.loginText.length > 0)
  }

  checkEntryIsValid() {
    return !(this.selectEntry.title.length > 0 && this.selectEntry.password.length > 0 && this.selectEntry.loginText.length > 0)
  }

  copyText(password: string) {
    navigator.clipboard.writeText(password).then().catch(e => console.error(e));
  }

  clear(dt1: Table) {
    dt1.clear();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 900) {
      this.router.navigate(['/main/entrieslowres'])
    } else {
      this.router.navigate(['/main/entries'])
    }
  }

  goToSite(entry: Entry) {
    this.router.navigate(['entry.url'])
    if(entry.url.startsWith("http://") || entry.url.startsWith("https://")) {
      window.open(entry.url, '_blank')
    } else { window.open('http://' + entry.url, '_blank') }

  }


  cancelEdit() {
    this.onDialogHide();
  }



}
