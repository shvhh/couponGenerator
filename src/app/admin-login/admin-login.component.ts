import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  flatList = [];
  admin = {
    username: '',
    password: '',
  };
  defaultadmin = { username: 'KASHYAWAT', password: 'KUMAR@1992' };
  constructor(private router: Router) { }

  ngOnInit() {

  }
  login() {
    if (this.admin.username === this.defaultadmin.username && this.admin.password === this.defaultadmin.password) {
      this.router.navigate(['/admin-panel']);
    }
    else { alert('Wrong UserName or Password'); }
  }



}

