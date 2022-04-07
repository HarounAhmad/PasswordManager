import {Component, HostListener, OnInit} from '@angular/core';
import {Entry} from "../entry";
import {EntryService} from "../entry.service";
import {Router} from "@angular/router";
import {Table} from "primeng/table";
import {Dialog} from "primeng/dialog";

@Component({
  selector: 'app-entries-list-low-resolution',
  templateUrl: './entries-list-low-resolution.component.html',
  styleUrls: ['./entries-list-low-resolution.component.css']
})
export class EntriesListLowResolutionComponent implements OnInit {

  public entries: Entry[] = [];
  loading: boolean = false;
  display: boolean = false;
  selectEntry: Entry = new Entry();
  innerWidth: any;

  SaveButtonText: string = "";
  CancelButtonText: string = "";
  DeleteButtonText: string = "";

  constructor(
    private entryService: EntryService,
    private router: Router,
  ) {
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
      console.log(data)
      this.router.navigateByUrl("/", {skipLocationChange: true}).then(() => {
        this.router.navigate(['/main/entries'])
      })
    })
  }

  editEntry(selectEntry: Entry) {
    this.entryService.edit(selectEntry).subscribe(data => console.log(selectEntry.id + "\n" + data))
    this.display = false
  }

  showEntryEdit(entry: Entry) {
    this.selectEntry = entry;
    this.display = true;
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
    if(this.innerWidth < 900) {
      this.router.navigate(['/main/entrieslowres'])

    } else {
      this.router.navigate(['/main/entries'])
    }

    if(this.innerWidth < 500) {
      this.SaveButtonText = "";
      this.CancelButtonText = "";
      this.DeleteButtonText = "";
    } else {
      this.SaveButtonText = "Save";
      this.CancelButtonText = "Cancel";
      this.DeleteButtonText = "Delete";
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
