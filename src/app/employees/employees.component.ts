import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees:any=[];
  term:string="";
  column:string="";
  order:string="";
  limit:string="";
  page:string="";
 
  
  constructor(private _employeeService:EmployeesService){
   this.loadEmployees();
  }
  loadEmployees(){
    this._employeeService.getEmployees().subscribe(
      (data:any)=>{
        console.log(data);
        this.employees=data;
      },(err:any)=>{
        alert("Internal server error!");
      }
    )
  }
  filter(){
    this._employeeService.getFilteredEmployees(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.employees=data;
      },(err:any)=>{
        alert("Internal server error!");
      }
    )
  }
  sort(){
    this._employeeService.getSortedEmployees(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.employees=data;
      },(err:any)=>{
        alert("Internal server error!");
      }
    )
  }
  pagination(){
    this._employeeService.getPaginatedEmployees(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.employees=data;
      },(err:any)=>{
        alert("Internal server error!");
      }
    )
  }
  id:string="";
  delete(id:any){
    this._employeeService.deleteEmployees(id).subscribe(
      (data:any)=>{
        alert("Record deleted successfully");
        this.loadEmployees();
      },(err:any)=>{
        alert("Internal server error!");
      }
    )

  }
}
