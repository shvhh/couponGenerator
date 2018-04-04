import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UpdateTeriffComponent } from './update-teriff/update-teriff.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HistoryComponent } from './history/history.component';
import { PopupComponent } from './popup/popup.component';
import { RechargeComponent } from './recharge/recharge.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
const routes: Routes = [
  { path: 'generatecoupon', component: RechargeComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'updateuser', component: UpdateUserComponent },
  { path: 'updatetarrif', component: UpdateTeriffComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: '', redirectTo: 'generatecoupon', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
