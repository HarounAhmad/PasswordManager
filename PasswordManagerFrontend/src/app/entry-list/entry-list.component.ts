import { Component, OnInit } from '@angular/core';
import {Entry} from "../entry";
import {EntryService} from "../entry.service"

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.entryService.findAll().subscribe(data => {
      this.entries = data;
    });
  }

}
