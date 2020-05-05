import { Directive,Input } from '@angular/core';
import {Validator,AbstractControl,NG_VALIDATORS,ValidatorFn, Validators} from '@angular/forms';
import { from } from 'rxjs';



@Directive({
  selector: '[appCheckDublicateUsername]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckDublicateUsernameDirective,
      multi: true
    }
  ]
})
export class CheckDublicateUsernameDirective implements Validators {
  @Input("appCheckDublicateUsername") username: string;

  validate(control:AbstractControl): { [key: string]: any } | null {
    console.log(this.username);
    return control.value===this.username?{'usernameInvalid': true }:null;
  }

}
