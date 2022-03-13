import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Entry} from "./entry";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private entriesUrl: string;

  constructor(private http: HttpClient) {
    this.entriesUrl = 'http://localhost:8080/api/v1/entries'
  }

  public findAll(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.entriesUrl)
  }

  public save(entry: Entry){
    return this.http.post<Entry>(this.entriesUrl, entry)
  }
}
