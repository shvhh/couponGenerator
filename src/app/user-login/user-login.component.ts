import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
declare function getUserCredentials(callback);
declare function addUserCredentials(credentials, callback);
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signUpPage = true;
  admin = {
    username: '',
    password: '',
    repass: '',
    Id: ''
  };
  defaultUser: any;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    getUserCredentials((err, data) => {
      this.dataService.setLoaderStatus(false);
      if (err) {
        alert('there is some technical issue please contact your vendor');
      }
      else if (data.length) {
        this.defaultUser = data[0];
        this.signUpPage = false;
      }
    });

  }
  login() {
    if (this.admin.username === this.defaultUser.username && this.admin.password === this.defaultUser.password) {
      this.dataService.setLoginScreenStatus(false);
      this.router.navigate(['/generatecoupon']);
    }
    else { alert('Wrong UserName or Password'); }
  }
  register() {

    if (!(this.admin.password && this.admin.username)) {
      alert('Username Or Password Can\'t Be Blank');
    }
    else if (this.admin.password !== this.admin.repass) {
      alert('Password & Confirm Password should be the same');
    }
    else if (this.admin.Id && (parseInt(this.admin.Id) > Date.now() || parseInt(this.admin.Id) < 1523108827892)) {
      alert('invalid Id Format');
    }
    else {
      this.dataService.setLoaderStatus(true);
      addUserCredentials({ username: this.admin.username, password: this.admin.password, Id: this.admin.Id }, (err) => {
        if (err) {

          alert('there is some technical issue please contact your vendor');
        }
        else {
          this.dataService.setLoaderStatus(false);
          this.dataService.setLoginScreenStatus(false);
          this.router.navigate(['/generatecoupon']);
        }
      });
    }
  }


}

