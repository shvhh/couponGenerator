import { Component, OnInit, ViewChild } from '@angular/core';
declare function loadFlatList(callback): any;
declare function loadCustomer(flatId, callback): any;
declare function updateCustomer(flatId, updateData, callback): any;
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUser = {
    flat: '',
    name: '',
    email: '',
    meter: '',
    category: 'A',
    mobile: '',
    couponNumber: 0
  };
  dataLoadFailed = true;
  @ViewChild('formRef')
  myForm: any;
  flatList = [];
  constructor() { }

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
          this.updateUser = customerData[0];
          this.dataLoadFailed = false;
        }
        else {
          alert('no record Found');
        }
      }
    });
  }
  updateDetails() {
    updateCustomer(this.updateUser.flat, this.updateUser, (err, updated) => {
      console.log(err, updated);
      if (err) { alert('There is some technical issue please contact you vendor'); }
      else {
        this.myForm.reset();
        this.updateUser = {
          flat: '',
          name: '',
          email: '',
          meter: '',
          category: 'A',
          mobile: '',
          couponNumber: 0
        };
        this.dataLoadFailed = true;
        alert('User Updated Successfully');
      }
    });
  }
}
