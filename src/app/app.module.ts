import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AddEmployComponent } from './add-employ/add-employ.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpViewComponent } from './emp-view/emp-view.component';
import { NavbarEmpComponent } from './navbar-emp/navbar-emp.component';
const myRoute:Routes=[
{
  path:"",
  component:AdminLoginComponent
},
{
  path:"addemp",
  component:AddEmployComponent
},
{
  path:"addtask",
  component:AddTaskComponent

},
{
  path:"viewall",
  component:AdminViewComponent
},
{
  path:"emp",
  component:EmpLoginComponent
},
{
  path:"empview",
  component:EmpViewComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarAdminComponent,
    AddEmployComponent,
    AddTaskComponent,
    AdminViewComponent,
    EmpLoginComponent,
    EmpViewComponent,
    NavbarEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
