import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getDataFromServer() {
    return this.http.get<JSON>('http://localhost:8080/');
  }
}
