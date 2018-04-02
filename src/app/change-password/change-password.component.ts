import { Component, OnInit, ViewChild } from '@angular/core';
declare function changePassword(data, callback): any;
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  password = '';
  @ViewChild('formRef')
  myForm: any;
  showPassword = false;
  constructor() { }

  ngOnInit() { }
  changePassword() {
    changePassword({ password: this.password }, (err, data) => { });
  }
}
