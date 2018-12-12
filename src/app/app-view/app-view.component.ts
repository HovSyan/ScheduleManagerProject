import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.css']
})
export class AppViewComponent implements OnInit {
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
      resolve();
    });
  }

  initTabs() {
    this.tabs = this.data.data.tabs;
    this.currentTabId = this.tabs[0];
  }
}
