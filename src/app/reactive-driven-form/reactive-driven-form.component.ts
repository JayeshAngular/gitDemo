import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css']
})
export class ReactiveDrivenFormComponent {
  userForm !: FormGroup

  ngOnInit() {
    this.userForm = new FormGroup({
      firstname: new FormControl('',[]),
      lastname: new FormControl('',[]),
      mobileno: new FormControl('',[]),
      email: new FormControl('',[]),
    }) 
  }
  save () {
    console.log(this.userForm)
  }
}
