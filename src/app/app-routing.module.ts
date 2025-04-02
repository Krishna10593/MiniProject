import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ErrorComponent } from './error/error.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard], children:[
    {path:"employees", component:EmployeesComponent},
    {path:"home", component:HomeComponent},
    {path: "create-employee", component:CreateEmployeeComponent},
    {path:"employee-details/:id", component:EmployeeDetailsComponent},
    {path:"edit-employee/:id", component:CreateEmployeeComponent}
  ]},
  {path:"login", component:LoginComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
