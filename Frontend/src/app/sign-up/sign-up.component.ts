import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public title="Signup into your account";
  public a="10";

  public Login={
    "Email":"",
    "Password":""
  }
 
  
  constructor(private route :Router,private employeeService:ServiceService) { }

  ngOnInit() {
  }
  goToLoginPage(){
    console.log(this.Login.Email);
   this.employeeService.Signup(this.Login.Email,this.Login.Password)
   .subscribe(data=>{
     console.log("working"+data);
     alert("User added successfully!");
     this.route.navigateByUrl("login");
   },
   err=>{
        console.log(err);
        alert("Email already exist");
        document.location.reload(true);
   })
  }

}
