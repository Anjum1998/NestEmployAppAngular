import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
empcode=""
task=""
status=""
readValue=()=>
{
  let data:any={"empcode":this.empcode,"task":this.task,"status":this.status}
  console.log(data)
}
}
