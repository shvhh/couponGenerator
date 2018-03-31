import { Component, OnInit } from '@angular/core';
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
    mobile: ''
  };
  flatList = ['hello', 'hello1', 'loadFlatList', 'loadFlatList'];
  constructor() {}

  ngOnInit() {}

  loadCustomerList() {
    loadFlatList((err, list) => {
      this.flatList = list;
    });
  }

  loadDetails(event) {
    console.log();
    loadCustomer(event.target.value, (err, list) => {
      this.updateUser = list[0];
    });
  }
  updateDetails() {
    updateCustomer(this.updateUser.flat, this.updateUser, (err, updated) => {
      console.log(updated);
    });
  }
}
