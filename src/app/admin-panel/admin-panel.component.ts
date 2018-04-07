import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
declare const $: any;
declare function loadFlatList(callback): any;
declare function showRechargeHistory(queryArray, pageID, callback): any;
declare function deleteCoupon(couponId, callback): any;

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
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
      if (err) {
        alert('There is some technical issue please contact you vendor');
      }
      else {
        this.historyList = list;
      }
    });

  }
  deleteCoupon(coupon) {
    deleteCoupon(coupon, (err, data) => {
      if (err) { alert('There is some technical issue please contact you vendor'); }
      else {
        this.historyList = this.historyList.filter((elem) => elem['_id'] !== coupon['_id']);
      }
    });
  }
}
