import { Component } from '@angular/core';

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

readvalue=()=>
{
  let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"company":this.company,
  "mobile":this.mobile,"username":this.username,"password":this.password}
  console.log(data)
}
}
