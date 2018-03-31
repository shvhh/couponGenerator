import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'generatecoupon',
    title: 'Genrate Coupon',
    icon: 'dashboard',
    class: ''
  },
  { path: 'adduser', title: 'Add Customer', icon: 'person_add', class: '' },
  {
    path: 'updateuser',
    title: 'Update Customer',
    icon: 'person_outline',
    class: ''
  },
  {
    path: 'updatetarrif',
    title: 'Update Tarrif Rate',
    icon: 'library_books',
    class: ''
  },
  {
    path: 'history',
    title: 'Recharge History',
    icon: 'history',
    class: ''
  },
  {
    path: 'admin',
    title: 'Admin Panel',
    icon: 'supervisor_account',
    class: ''
  },
  {
    path: 'changepassword',
    title: 'Change Password',
    icon: 'settings',
    class: ''
  },
  {
    path: 'upgrade',
    title: 'Upgrade to PRO',
    icon: 'unarchive',
    class: 'active-pro'
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
