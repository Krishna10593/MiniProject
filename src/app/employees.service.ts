import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _httpClient:HttpClient) { }
  getEmployees():Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees");
  }

  getFilteredEmployees(term:any):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+term);
  }

  getSortedEmployees(column:any, order:any):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy="+column+ "&order="+order );
  }

  getPaginatedEmployees(limit:any, page:any):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit="+limit+ "&page="+page );
  }

  deleteEmployees(id:any):Observable<any>{
    return this._httpClient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id );
  }

  createEmployees(data:any):Observable<any>{
    return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data);
  }
// To find individual employee details 
  getEmployee(id:any):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
  }

  //Update employee 
 
  updateEmployee(id:any,data:any):Observable<any>{
    return this._httpClient.put("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id,data);
  }


}
