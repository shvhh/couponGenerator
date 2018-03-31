import { Component, OnInit } from '@angular/core';
declare function addCustomer(data, callback): any;
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser = {
    flat: '',
    name: '',
    email: '',
    meter: '',
    category: 'A',
    mobile: ''
  };
  constructor() { }

  ngOnInit() { }
  addUser() {
    addCustomer(this.newUser, console.log);
  }
}
