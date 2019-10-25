import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title="SignIn into your account";

 public login=[
   {"email":"bhavadharanim2019@srishakthi.ac.in","password":"1234"},
   {"email":"tharani2797@gmail.com","password":"1234"}
 ];
 public Login={
   "Email":"",
   "Password":""
 }



  constructor(private route:Router,private employeeService:ServiceService) { }

  ngOnInit() {
  }
  goToDashboard(){
    console.log(this.Login.Email);
   this.employeeService.SignIn(this.Login.Email,this.Login.Password)
   .subscribe(data=>{
     console.log("working"+data);
     this.route.navigateByUrl("dashboard");
   },
   err=>{
     console.log("Error"+err);
     alert("Email id or Password are incorrect");
     document.location.reload(true);
     
   })
  }

}
