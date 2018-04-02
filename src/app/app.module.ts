import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { RechargeComponent } from './recharge/recharge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdateTeriffComponent } from './update-teriff/update-teriff.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { HistoryComponent } from './history/history.component';
import { DataService } from './data.service';
import { PopupComponent } from './popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AddUserComponent,
    UpdateUserComponent,
    UpdateTeriffComponent,
    ChangePasswordComponent,
    HistoryComponent,
    PopupComponent,
    RechargeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
