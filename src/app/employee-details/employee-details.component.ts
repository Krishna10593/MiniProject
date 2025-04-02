import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
id:number=0;
employee:any="";
constructor(private _employeeService:EmployeesService, private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;
      console.log(this.id);
    },(err:any)=>{
      alert("Internal server error!");
    }
  )
  _employeeService.getEmployee(this.id).subscribe(
    (data:any)=>{
      console.log(data);
      this.employee=data;
    },(err:any)=>{
      alert("Internal server error");
    }
  )
}
}
