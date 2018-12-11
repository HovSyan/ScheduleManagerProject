import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import { of } from 'rxjs';
import {reject} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  protected data: any;

  protected isReady = false;

  protected tabs: any[];
  protected currentTabId: number;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getDataFromServer().subscribe(response => {
      this.data = response;
      this.initAll()
        .then(() => {
          this.isReady = true;
        });
    });
  }

  initAll() {
    return new Promise((resolve) => {
      this.initTabs();
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }

  initTabs() {
    this.tabs = this.data.data.tabs;
    this.currentTabId = this.tabs[0];
  }
}
