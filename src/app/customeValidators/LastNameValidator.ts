import { AbstractControl, ValidationErrors } from "@angular/forms";

export function LastNameValidator(control:AbstractControl) : ValidationErrors | null {
     let LastName = control.value;

     if(LastName != "Tayde") {
        return {LastNameInvalid:true}
     }
     else {
        return null
     }
}