import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators, NgForm} from '@angular/forms';
import { from } from 'rxjs';


import { User } from '../../models/User.models';
import { LoginServiceService } from '../../shared/login-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  massage: string;
  Error = false;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(private formbuilder:FormBuilder,private loginService:LoginServiceService) { }

  ngOnInit(): void {
    this.setFormState();
    this.loginService.logout();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit(){
    this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
    let login=this.loginForm.value;
    this.loginService.login(login);
    console.log(login);
  }
  get f() { return this.loginForm.controls; }
}
