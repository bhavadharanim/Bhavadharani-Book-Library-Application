import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-take-orders',
  templateUrl: './take-orders.component.html',
  styleUrls: ['./take-orders.component.css']
})
export class TakeOrdersComponent implements OnInit {

  public name="";
  selectedLevel;
  data:Array<Object> = [1,2,3,4,5,6,7,8,9,10];
  public HTML=`<div class="alert alert-primary alert-dismissible fade show" role="alert">
  <strong>Thank you!</strong> You have added your address successfully!!!.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="false">&times;</span>
  </button>
</div>`;

public receive=`<div class="alert alert-warning alert-dismissible fade show positions" role="alert">
<h4 class="alert-heading">Thank You!</h4>
<p>Aww yeah, you successfully Buying the our Book. This book will help you design your life or future help and Onces you getting this book its valid for 24 year after that you renovate the item.</p>
<hr>
<p class="mb-0" style="text-align: center; margin-top: 4rem;">And shortly you reached your dream book.And Keep shopping</p>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

  constructor(private route:Router) { }

  ngOnInit() {
   
  }
  verify()
  {
    document.getElementById("verify").innerHTML=this.HTML;
  }
  conformation(){
    document.getElementById("positions").innerHTML=this.receive;
    
  }

}
