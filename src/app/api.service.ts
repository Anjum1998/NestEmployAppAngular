import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmploy=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addemp",data)
  }
  addTask=(data:any)=>
  {
    return this.http.post("http://localhost:8080/addtask",data)
  }
  viewAllTask=()=>
  {
    return this.http.get("http://localhost:8080/viewall")
  }
  employLogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/login",data)
  }
}
