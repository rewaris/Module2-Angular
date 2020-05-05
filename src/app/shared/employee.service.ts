import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployeeList(){
    return JSON.parse(localStorage.getItem('employee'));
  }
  postEmployee(employee:Employee){
    localStorage.setItem("employee",JSON.stringify(employee));
  }
}
