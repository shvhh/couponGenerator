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
const routes: Routes = [
  { path: 'generatecoupon', component: DashboardComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'updateuser', component: UpdateUserComponent },
  { path: 'updatetarrif', component: UpdateTeriffComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'admin', component: PopupComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: '', redirectTo: 'generatecoupon', pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
