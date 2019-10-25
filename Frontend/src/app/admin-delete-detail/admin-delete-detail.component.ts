import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-delete-detail',
  templateUrl: './admin-delete-detail.component.html',
  styleUrls: ['./admin-delete-detail.component.css']
})
export class AdminDeleteDetailComponent implements OnInit {

  constructor(private service:ServiceService) { }

  public details={
    "id":""
  };

  ngOnInit() {
  }

  sendDetailToBackend(){
    this.service.DeleteDetail(this.details.id)
    .subscribe(data=>{
      console.log(data);
    })
  }

}
