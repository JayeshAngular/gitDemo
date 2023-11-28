import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LastNameValidator } from '../customeValidators/LastNameValidator';

@Component({
  selector: 'app-form-builder-com',
  templateUrl: './form-builder-com.component.html',
  styleUrls: ['./form-builder-com.component.css']
})
export class FormBuilderComComponent {
  UserRegForm !: FormGroup
  constructor(private formDemo:FormBuilder){}

  ngOnInit() {
    this.UserRegForm = this.formDemo.group({
      FirstName : ['',[Validators.required, Validators.pattern('[a-zA-Z]{3,6}')]],
      LastName : ['',[LastNameValidator]]
    })
  }
  save () {
    console.log(this.UserRegForm)
    console.log(this.UserRegForm.value)
  }
  reset() {
    this.UserRegForm.reset();
  }

  setvalue() {
    var obj1:any = {
      FirstName : "Jayesh",
     
    }

    this.UserRegForm.setValue(obj1);
  }

  patchvalue() {
    var obj1:any = {
      FirstName : "Jayesh",
      LastName : "Tayde"
    }

    this.UserRegForm.patchValue(obj1);
  }
}
