import { Component, OnInit, ViewChild } from '@angular/core';
declare function addCustomer(data, callback): any;
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @ViewChild('formRef')
  myForm: any;
  newUser = {
    flat: '',
    name: '',
    email: '',
    meter: '',
    category: 'A',
    mobile: '',
    couponNumber: 0
  };
  constructor() { }

  ngOnInit() {
    console.log(this.myForm);
  }
  addUser() {
    addCustomer(this.newUser, (err, data) => {
      if (err) {
        alert('There is some technical issue please contact you vendor');
      } else {
        this.myForm.reset();
        this.newUser = {
          flat: '',
          name: '',
          email: '',
          meter: '',
          category: 'A',
          mobile: '',
          couponNumber: 0
        };
        alert('User added Successfully');
      }
    });
  }
}
