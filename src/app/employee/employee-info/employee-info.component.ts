import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {Employee} from "../../models/employee.model";
import { from } from 'rxjs';
import {EmployeeService} from '../../shared/employee.service'
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  showMsg=false;

  existingUsername:any;
  isUserExist:boolean=false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  submitted = false;
  employee:Employee={
    firstname: '',
    lastname: '',
    dateofbirth:null,
    placeofbirth:'',
    email:'',
    phonenumber:null,
    username: '',
    address:''
}
  constructor(private empService:EmployeeService) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY'
      });
   }

  ngOnInit(): void {
   
  }
  saveEmployee(employeeForm:NgForm):void{
    this.submitted = true;
    if(employeeForm.invalid){
      return;
    }
    else{
     this.isUserNameExist(employeeForm.value.username);
     if(!this.isUserExist){
      this.employee.firstname=employeeForm.value.firstname;
      this.employee.lastname=employeeForm.value.lastname;
      this.employee.email=employeeForm.value.email;
      this.employee.dateofbirth=employeeForm.value.dateofbirth;
      this.employee.placeofbirth=employeeForm.value.placeofbirth;
      this.employee.email=employeeForm.value.email;
      this.employee.phonenumber=employeeForm.value.phonenumber;
      this.employee.username=employeeForm.value.username;
      this.employee.address=employeeForm.value.address;
      console.log(this.employee);
      this.empService.postEmployee(this.employee);
      this.resetForm(employeeForm);
      this.showMsg=true;
     }
    }
    console.log(employeeForm);
  }
  resetForm(employeeForm?:NgForm):void{
    if(employeeForm)
    {
      employeeForm.reset();
      this.submitted = false;
    }
  }
  closeAlert(){
    this.showMsg=false;
  }
  isUserNameExist(username:string){
    var emp= this.empService.getEmployeeList();
   console.log(emp);
   if(username===emp.username){
    console.log("1"+username);
      this.isUserExist=true;
      console.log("2"+username);
   }
   console.log(this.existingUsername);
  }
}
