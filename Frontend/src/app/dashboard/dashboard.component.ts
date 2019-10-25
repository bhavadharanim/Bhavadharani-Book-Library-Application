import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productService:ServiceService) { }

  public product=[
    {"name":"C programming",
    "author":"Mc.Kevin",
    "description":"C is a high-level and general-purpose programming language that is ideal for developing firmware or portable applications. Originally intended for writing system software."},

    {"name":"C programming","author":"Mc.Kevin","description":"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small."},
    {"name":"C programming","author":"Mc.Kevin","description":"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."},
    {"name":"C programming","author":"Mc.Kevin","description":"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."},
    {"name":"C programming","author":"Mc.Kevin","description":"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."}

  ]
  public Details=[];
  public products=[];


  ngOnInit() {
    this.productService.getDetails()
    .subscribe(data=>{
      this.Details=Object.values(data);
      // this.Details=data;
      console.log("retrive the data")
      console.log(data);
      console.log(this.Details);
      console.log("array ");

      for(let i of this.Details){
        this.products=i;
                 console.log("details of title :",i,this.products);
                 
      }
      for(let i of this.products){
        console.log(i.title);
      }


    })

  }

  

}
