import { Component, OnInit } from '@angular/core';
declare function showCustomerList(callback): any;
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList = [];
  constructor() { }

  ngOnInit() { this.loadCustomerList(); }
  loadCustomerList() {
    showCustomerList((err, list) => {
      this.customerList = list;
    });
  }
}

