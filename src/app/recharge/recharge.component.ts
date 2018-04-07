import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
declare function loadFlatList(callback): any;
declare function loadCustomer(flatId, callback): any;
declare function updateCustomer(flatId, updateData, callback): any;
declare function addCouponToDB(couponData, callback): any;
@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  flatList = [];
  flatNo = '';
  currentUser = {
    flat: '',
    name: '',
    email: '',
    meter: '',
    category: 'A',
    mobile: '',
    couponNumber: 0
  };
  amount = 100;
  dataLoadFailed = true;
  couponData: any = {};
  @ViewChild('formRef')
  myForm: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadCustomerList();
  }
  loadCustomerList() {
    loadFlatList((err, list) => {
      this.flatList = list;
    });
  }

  loadDetails(event) {
    loadCustomer(event.target.value, (err, customerData) => {
      this.dataLoadFailed = true;
      if (err) { alert('There is some technical issue please contact you vendor'); }
      else {
        if (customerData.length > 0) {
          this.currentUser = customerData[0];
          this.dataLoadFailed = false;
        }
        else {
          alert('no record Found');
        }
      }
    });
  }
  updateDetails(couponData) {
    this.currentUser.couponNumber += 1;
    updateCustomer(this.currentUser.flat, this.currentUser, (err, updated) => {
      if (err) { alert('There is some technical issue please contact you vendor'); }
      else {
        this.myForm.reset();
        this.currentUser = {
          flat: '',
          name: '',
          email: '',
          meter: '',
          category: 'A',
          mobile: '',
          couponNumber: 0
        };
        this.dataLoadFailed = true;
        this.addCoupon(couponData);
      }
    });
  }

  addCoupon(couponData) {
    addCouponToDB(couponData, (err, data) => {
      if (err) { alert('There is some technical issue please contact you vendor'); }
      else { this.dataService.setReachargeCoupon(this.couponData); }
    });
  }
  generateCoupon() {
    if (this.amount) {
      this.couponData = {
        meter: this.currentUser.meter,
        flat: this.currentUser.flat,
        name: this.currentUser.name,
        mobile: this.currentUser.mobile,
        date: Date.now(),
        amount: this.amount
      };
      this.flatNo = '';
      this.updateDetails(this.couponData);

    }
    else { alert('Please select Amount'); }
  }
}
