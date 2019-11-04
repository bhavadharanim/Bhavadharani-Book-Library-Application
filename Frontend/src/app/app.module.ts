import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu'; 
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field'; 

import {HttpClientModule} from '@angular/common/http';
import { AdminAddDetailComponent } from './admin-add-detail/admin-add-detail.component';
import { AdminDeleteDetailComponent } from './admin-delete-detail/admin-delete-detail.component';
import { HeaderComponent } from './header/header.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { TakeOrdersComponent } from './take-orders/take-orders.component';
import {MatSelectModule} from '@angular/material/select'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    AdminAddDetailComponent,
    AdminDeleteDetailComponent,
    HeaderComponent,
    UserPanelComponent,
    TakeOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent],
  exports:[
    LoginComponent,
    SignUpComponent
  ]
})
export class AppModule { }
