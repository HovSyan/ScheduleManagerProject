import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() id: number;

  protected tab;
  protected isReady = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getDataById(this.id)
      .subscribe(response => {
        this.tab = response;
        console.log(this.tab);

        this.initAll()
          .then(() => {
            this.isReady = true;
          });
      });
  }

  initAll() {
    return new Promise(resolve => {
      resolve();
    });
  }
}
