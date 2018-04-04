import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
declare function loadFlatList(callback): any;
declare function showRechargeHistory(queryArray, pageID, callback): any;
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  queryObject: any = {};
  queryArray: any[] = [{ date: { $gte: 0 } }, { date: { $lt: 2145830400000 } }];
  historyList = [];
  flatList = [];
  pageID;
  constructor(private router: Router) { }

  ngOnInit() {
    this.pageID = this.router.url.split('/').pop();
    this.loadCustomerList(); this.updatelist();
  }
  loadCustomerList() {
    loadFlatList((err, list) => {
      this.flatList = list;
    });
  }
  fromDateChange(event) {
    if (event) { this.queryArray[0].date['$gte'] = Date.parse(event) - 19800000; }
    else { this.queryArray[0].date['$gte'] = 0; }
    this.updatelist();
  }
  toDateChange(event) {
    if (event) { this.queryArray[1].date['$lt'] = Date.parse(event) + 86400000; }
    else { this.queryArray[1].date['$lt'] = 2145830400000; }
    this.updatelist();
  }
  listChange(event) {
    const flatId = event.target.value;
    if (flatId) { this.queryArray[2] = { flat: flatId }; }
    else { this.queryArray.splice(2, 1); }
    this.updatelist();
  }

  updatelist() {
    showRechargeHistory(this.queryArray, this.pageID, (err, list) => {
      this.historyList = list;
    });

  }
}
