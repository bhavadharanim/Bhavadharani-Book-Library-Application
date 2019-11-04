import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from './details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  public url="http://localhost:3000/user";

  public admin_url="http://localhost:3000";

  public Item;
  public val="";

  constructor(private http:HttpClient) { }

  
  Signup(email,password){
    console.log("Service is working........");
    let user={
      email:email,
      password:password
    }
    return this.http.post(`${this.url}/signup`,user);
    
  }
  SignIn(email,password){
  console.log("Service is working........");
  let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let user={
      email:email,
      password:password
    }
    return this.http.post(`${this.url}/signin`,user);
  }

  sendDetails(title,author,description){
    let user={
      title:title,
      author:author,
      description:description
    }
    return this.http.post(`${this.admin_url}/admin`,user);

  }

  getDetails():Observable<Details[]>{
    return this.http.get<Details[]>(`${this.admin_url}/admin`);
  }

  DeleteDetail(id):Observable<Details[]>{
    return this.http.delete<Details[]>(`${this.admin_url}/admin/${id}`);

  }
  searchItem(item){
    localStorage.setItem("Username",item);
    console.log("get header to service.......",item);

  }
  sendItem(){
    this.Item=localStorage.getItem("item");
    console.log("send service to component......",localStorage.getItem("item"));
    this.val=this.Item;
   return this.val;
  }

  getSpecificValue(item):Observable<Details[]>{

    console.log("service working ...",item);
    return this.http.get<Details[]>(`${this.admin_url}/admin/${item}`);

  }


}
