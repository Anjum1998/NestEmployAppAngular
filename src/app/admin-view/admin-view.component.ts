import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
constructor(private api:ApiService){
  api.viewAllTask().subscribe(
    (response:any)=>
    {
      this.data=response
    }
  )
}
data:any=[]
}
