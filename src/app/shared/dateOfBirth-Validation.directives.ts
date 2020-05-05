import {AbstractControl,NG_VALIDATORS,Validator} from '@angular/forms';
import {Directive,Input} from '@angular/core'


@Directive({
    selector:'[appAgeNotAllowed]',
    providers:[{provide:NG_VALIDATORS,useExisting:ageValidator,multi:true}]
})

export class ageValidator implements Validator
{
    validate(c: AbstractControl): { [key: string]: any } | null {
         const today=new Date();
          const birthDate=new Date(c.value);
          console.log('birthDate'+ birthDate);
          let age=today.getFullYear() - birthDate.getFullYear();
          console.log('age'+ age);
          return age>=18 ?  null : { 'dateInvalid': true };
      }
}