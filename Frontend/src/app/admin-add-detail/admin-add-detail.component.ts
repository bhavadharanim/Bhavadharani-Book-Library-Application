import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-add-detail',
  templateUrl: './admin-add-detail.component.html',
  styleUrls: ['./admin-add-detail.component.css']
})
export class AdminAddDetailComponent implements OnInit {

  constructor(private service:ServiceService) { }

  public details={
    "title":"",
    "author":"",
    "description":""
  }
  
  public Details=[];
  public vib=[];

  ngOnInit() {

  }
  sendDetailToBackend(){
    console.log(this.details.title+"  "+this.details.author+"   "+this.details.description);
    this.service.sendDetails(this.details.title,this.details.author,this.details.description)
    .subscribe(data=>{
      console.log(data);
      alert("Title Added Successfully!!");
    });

  };


  retriveDetailToBackend(){
    this.service.getDetails()
    .subscribe(data=>{
      this.Details=Object.values(data);
      // this.Details=data;
      console.log("retrive the data")
      console.log(data);
      console.log(this.Details);
      console.log("array ");

      for(let i of this.Details){
        this.vib=i;
                 console.log("details of title :",i,this.vib);
                 
      }
      for(let i of this.vib){
        console.log(i.title);
      }


    })
  }

}
