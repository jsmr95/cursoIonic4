import {AbstractControl} from '@angular/forms';


export const isNotTemporalEmailValidator = (control: AbstractControl) => {

  const temporalDomains = [
    '10minutesmail.com',
    'temporalmail.com',
    'preventspam.com'
    //...
  ];

  //la opción adecuada es find y así me ahorro el if termina.length > 0
  let termina = temporalDomains.filter((e) => {
    return control.value.endsWith(e);
  });

  return termina.length > 0 ? {isNotTemporalEmailValidator: true} : undefined;

}
