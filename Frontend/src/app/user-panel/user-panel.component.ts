import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private productService:ServiceService) { }

  public Details=[];
  public products=[];
  public search="";


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
  goToSearch(){
    console.log("search value......",this.search);
    console.log("else working");
    this.productService.getSpecificValue(this.search)
    .subscribe(data=>{
      console.log(data);
      this.Details=Object.values(data);
      for(let i of this.Details){
        this.products=i;
                 console.log("details of title :",i,this.products);
                 
      }
      for(let i of this.products){
        console.log(i.title);
      }


    })
  

}
goToC(){
  var title="C programming";
  this.productService.getSpecificValue(title)
  .subscribe(data=>{
    console.log(data);
    this.Details=Object.values(data);
    for(let i of this.Details){
      this.products=i;
               console.log("details of title :",i,this.products);
               
    }
    for(let i of this.products){
      console.log(i.title);
    }

  })
}
goToJava()
{
  var title="Java";
  this.productService.getSpecificValue(title)
  .subscribe(data=>{
    console.log(data);
    this.Details=Object.values(data);
    for(let i of this.Details){
      this.products=i;
               console.log("details of title :",i,this.products);
               
    }
    for(let i of this.products){
      console.log(i.title);
    }

  })
}
goToMySQL()
{
  var title="SQL";
  this.productService.getSpecificValue(title)
  .subscribe(data=>{
    console.log(data);
    this.Details=Object.values(data);
    for(let i of this.Details){
      this.products=i;
               console.log("details of title :",i,this.products);
               
    }
    for(let i of this.products){
      console.log(i.title);
    }

  })
}
goToAngular()
{
  var title="Angular";
  this.productService.getSpecificValue(title)
  .subscribe(data=>{
    console.log(data);
    this.Details=Object.values(data);
    for(let i of this.Details){
      this.products=i;
               console.log("details of title :",i,this.products);
               
    }
    for(let i of this.products){
      console.log(i.title);
    }

  })
}
goToHTML()
{
  var title="HTML";
  this.productService.getSpecificValue(title)
  .subscribe(data=>{
    console.log(data);
    this.Details=Object.values(data);
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