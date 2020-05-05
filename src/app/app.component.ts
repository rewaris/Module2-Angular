import { Component } from '@angular/core';

import { LoginServiceService } from './shared/login-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeInfo'
  constructor(
    private loginService:LoginServiceService) {
}
  logout() {
    this.loginService.logout();
    console.log('logout');
}
isLogedIn(){
  return this.loginService.isLogedIn();
}
}
