import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public search="";
  constructor(private service:ServiceService) { }

  ngOnInit() {
    
  }
  goToSearch(){
    console.log(this.search);
    this.service.searchItem(this.search);
  }

}
