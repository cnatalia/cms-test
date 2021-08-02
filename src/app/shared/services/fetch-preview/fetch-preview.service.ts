/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DataItem } from './data-item';

@Injectable({
  providedIn: 'root'
})
export class FetchPreviewService {
  public data;

  constructor(private http: HttpClient) { }

  public setData( data) {

    this.data = data;

  }

  public getData(): Observable<DataItem[]>{
    return of(this.data);
  }
}
