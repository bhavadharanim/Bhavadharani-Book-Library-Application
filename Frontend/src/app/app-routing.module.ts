import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminAddDetailComponent } from './admin-add-detail/admin-add-detail.component';
import { HeaderComponent } from './header/header.component';
import { AdminDeleteDetailComponent } from './admin-delete-detail/admin-delete-detail.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { TakeOrdersComponent } from './take-orders/take-orders.component';


const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"login",pathMatch:"prefix"},
  {path:"signup",component:SignUpComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"add",component:AdminAddDetailComponent},
  {path:"header",component:HeaderComponent},
  {path:"delete",component:AdminDeleteDetailComponent},
  {path:"userpanel",component:UserPanelComponent},
  {path:"takeoders",component:TakeOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
