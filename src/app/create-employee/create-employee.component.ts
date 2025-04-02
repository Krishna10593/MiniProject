import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {


public employeesForm:FormGroup =new FormGroup({
  name:new FormControl(),
  gender:new FormControl(),
  company:new FormControl(),
  role:new FormControl(),
  package:new FormControl(),
  email:new FormControl(),
  dob:new FormControl(),
  address:new FormGroup({
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl()
    
  }),
  workmode:new FormControl(),
  hikes: new FormArray([])

  })
  id:number=0;

constructor(private _employeeService:EmployeesService, private _router:Router, _activatedRoute:ActivatedRoute){
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
      this.employeesForm.patchValue(data);
      
    },(err:any)=>{
      alert("Internal server error!");
    }
  )
  if(this.id){
    _employeeService.getEmployee(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.employeesForm.patchValue(data);
      },(err:any)=>{
        alert("Internal server error!");
      }
    )
  }
  this.employeesForm.get('workmode')?.valueChanges.subscribe(
    (data:any)=>{
    if(data=='remote'){
      this.employeesForm.addControl('wifibill', new FormControl());
      this.employeesForm.removeControl('travelfee');
    }else{
      this.employeesForm.addControl('travelfee', new FormControl());
      this.employeesForm.removeControl('wifibill');
    }
    }
  )

}


create(){
  if(this.id){
    console.log(this.employeesForm.value);
    this._employeeService.updateEmployee(this.id,this.employeesForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Employee record updated sucessfully");
        this._router.navigateByUrl("/dashboard/employees");

      },(err:any)=>{
        alert("Internal server error!");
      }
    )
  }
  else{
console.log(this.employeesForm);
this._employeeService.createEmployees(this.employeesForm.value).subscribe(
  (data:any)=>{
    console.log(data);
    alert("Empolyee record created successfully");
    this._router.navigateByUrl("/dashboard/employees");
  },(err:any)=>{
    alert("Internal server error!");
  }
)


  }
}
get hikesFormArray(){
  return this.employeesForm.get('hikes') as FormArray;
}
addhike(){
  this.hikesFormArray.push(
    new FormGroup({
      year: new FormControl(),
      percentage: new FormControl(),

    })
  )
}
deletehike(i:number){
  this.hikesFormArray.removeAt(i);
}
}

  

