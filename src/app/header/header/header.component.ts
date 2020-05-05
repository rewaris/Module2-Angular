import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../shared/login-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
    //this.islogin=this.loginService.isUserLogin;
  }
  logout() {
    this.loginService.logout();
    console.log('logout');
}
}
