import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AppServiceService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials: { username: string; password: string; } | undefined, callback: (() => any) | undefined) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('/api/v1/sec/user', {headers: headers}).subscribe(response => {
      if (response === "user") {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }
}
