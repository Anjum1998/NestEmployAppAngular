import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent {
empcode:any=""
data:any=[]
constructor(private api:ApiService){
  this.empcode=localStorage.getItem("userInfo")
  let data:any={
    "empcode":this.empcode
  }
  this.api.employView(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      this.data=response
    }
  )
}
}
