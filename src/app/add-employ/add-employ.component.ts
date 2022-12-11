import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent {
empcode=""
empname=""
designation=""
salary=""
company=""
mobile=""
username=""
password=""
constructor(private api:ApiService){}
readvalue=()=>
{
  let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"company":this.company,
  "mobile":this.mobile,"username":this.username,"password":this.password}
  console.log(data)
  this.api.addEmploy(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("employ added successfully")
        this.company=""
        this.designation=""
        this.empcode=""
        this.empname=""
        this.mobile=""
        this.password=""
        this.salary=""
        this.username=""
      }
      else{
        alert("something went wrong")
      }
    }
  )
}
}
