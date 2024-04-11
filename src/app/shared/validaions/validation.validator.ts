

import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


//Allow Alphanumeric char and space only
//  /^[0-9a-zA-Z ]+$/
export class TextFieldValidator {
  static validTextField(fc: FormControl) {
    if (fc.value != undefined && fc.value != '' && fc.value != null) {
      const regex = /^[0-9a-zA-Z ]+$/;
      if (regex.test(fc.value)) {
        return null;
      } else {
        return { validTextField: true };
      }
    } else {
      return null;
    }
  }
}

//Allow Numeric char
// /[0-9]+/
export class NumericFieldValidator {
  static validNumericField(fc: FormControl) {
    if (fc.value != undefined && fc.value != '' && fc.value != null) {
      const regex = /[0-9]+/;
      if (regex.test(fc.value)) {
        return null;
      } else {
        return { validNumericField: true };
      }
    } else {
      return null;
    }
  }
}

//Allow char and space only

//  /^[a-zA-Z ]+$/

export class CharFieldValidator {
  static validCharField(fc: FormControl) {
    if (fc.value != undefined && fc.value != '' && fc.value != null) {
      const regex = /^[a-zA-Z ]+$/;
      if (regex.test(fc.value)) {
        return null;
      } else {
        return { validCharField: true };
      }
    } else {
      return null;
    }
  }
}

//Allow Email only
// /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

export class EmailValidator {
  static validEmail(fc: FormControl) {
    if (fc.value != undefined && fc.value != '' && fc.value != null) {
      const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
      if (regex.test(fc.value)) {
        return null;
      } else {
        return { validEmail: true };
      }
    } else {
      return null;
    }
  }
}

//Not allowed  only White space

export class NoWhiteSpaceValidator {
  static noWhiteSpaceValidator(fc: FormControl) {
    if (fc.value != undefined && fc.value != '' && fc.value != null) {
      const isWhiteSpace = (fc.value.toString().trim().length === 0);

      if (!isWhiteSpace) {
        return null;
      } else {
        return { noWhiteSpaceValidator: true };
      }
    } else {
      return null;
    }
  }
}

// password and confirm password validation or two field validation
// for angular 8,9,10
// export function MustMatchValidator(
//   controlName: string,
//   matchingControlName: string
// ) {
//   return (ctrl : AbstractControl) => {
    
//     // const control = formGroup.get(controlName);
//     // const matchingControl = formGroup.get(matchingControlName);  
//     const control = ctrl.get(controlName);
//     const matchingControl = ctrl.get(matchingControlName);
    
//     if(matchingControl.errors && !matchingControl.errors['mustMatch']){ 
//         return;
//     }
//     if(control.value !== matchingControl.value){ 
//         matchingControl .setErrors({mustMatch : true});
//     }else{ 
//         matchingControl .setErrors(null);
//     }
//   };
// }
export function MustMatchValidator(controlName: string, matchingControlName: string) : ValidatorFn {
  return (ctrl : AbstractControl) : ValidationErrors | null => {
      //const control = formGroup.get(controlName);
      const control = ctrl.get(controlName);
      const matchingControl = ctrl.get(matchingControlName);

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          return null;
      }

      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }

      return null;
  }
}
