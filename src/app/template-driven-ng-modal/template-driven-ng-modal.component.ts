import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-ng-modal',
  templateUrl: './template-driven-ng-modal.component.html',
  styleUrls: ['./template-driven-ng-modal.component.css']
})
export class TemplateDrivenNgModalComponent {
  userForm:User = new User();
  save (form:any)
  {
    console.log("Form Data without Modal :", form.value);
    console.log("Form Data with Modal :", this.userForm);

  }
}
class User {
  firstName !: string;
  lastName !:string;
  mobileNo !:number; 
  email !:string; 
}
