import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { from } from 'rxjs';
import {User} from '../models/User.models'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user:User;
  constructor(private _router:Router) {
    this.user={
      username:'admin',
      password:'admin',
    };
    localStorage.setItem("user",JSON.stringify(this.user));
   }

  logout(){
    localStorage.removeItem("isValidUser");
    this._router.navigate(["/"]);
  }

  login(user:User){
    var authUser = JSON.parse(localStorage.getItem('user'));
    if(authUser !=null){
      if(authUser.username===user.username && authUser.password===user.password){
        localStorage.setItem("isValidUser",'True');
        this._router.navigate(['/create']);
        console.log('login')
        console.log('login1'+authUser);
        console.log('login2'+user);
      }
      else{
        this._router.navigate(["/"]);
        console.log('erroe')
      }
    }
else{
  this._router.navigate(["/"]);
}
}
checkCredentials() {
  var isValidUser=localStorage.getItem("isValidUser");
  if (isValidUser === null){
    this._router.navigate(['/']);
  }
}
isLogedIn(){
  var isValidUser=localStorage.getItem("isValidUser");
  if(isValidUser===null || isValidUser==''){
    return false;
  }
  else{
    if (isValidUser === 'True'){
      return true;
    }
    else{
      return true;
    }
  }
}
}
