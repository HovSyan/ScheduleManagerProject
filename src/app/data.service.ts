import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getDataFromServer() {
    return this.http.get<JSON>(this.serverURL);
  }

  getDataById(id: number) {
    return this.http.get<JSON>(this.serverURL).pipe(
      map(response => {
        for(let i = 0; i < response.data.tabs.length; i++) {
          if(response.data.tabs[i].tabId === id) {
            return response.data.tabs[i];
          }
        }
      })
    );
  }
}
