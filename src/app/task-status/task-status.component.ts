import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent {
empcode=""
status=""
data:any=[]
constructor(private api:ApiService){}
readValue=()=>
{
  let data:any={"empcode":this.empcode,"status":this.status}
  console.log(data)
}
updateBtnClick=(id:any)=>
{
  let data:any={"id":id}
  this.api.statusUpdate(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.status=="success")
      {
        alert("success")
      }
      else{
        alert("can not update")
      }
    }
  )
}
}
