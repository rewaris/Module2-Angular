import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginServiceService } from './shared/login-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';
import {ageValidator} from './shared/dateOfBirth-Validation.directives'
import { from } from 'rxjs';
import { HeaderComponent } from './header/header/header.component';
import { AuthguardGuard} from './shared/authguard.guard';
import { CheckDublicateUsernameDirective } from './shared/check-dublicate-username.directive';

const appRoutes:Routes=[
  { path: '', component: LoginComponent },
  { path :'create', canActivate:[AuthguardGuard], component: EmployeeInfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeInfoComponent,
    ageValidator,
    HeaderComponent,
    CheckDublicateUsernameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BsDatepickerModule,
    BrowserAnimationsModule
  ],
  providers: [LoginServiceService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
