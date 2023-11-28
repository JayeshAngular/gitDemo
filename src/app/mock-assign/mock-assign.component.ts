import { Component } from '@angular/core';

@Component({
  selector: 'app-mock-assign',
  templateUrl: './mock-assign.component.html',
  styleUrls: ['./mock-assign.component.css']
})
export class MockAssignComponent {

  employeeData:any = [
    {
      eFirstName : "A",
      eDesignation : "Angular Developer",
      eSalary : 25400,
    },
    {
      eFirstName : "B",
      eDesignation : "Java Developer",
      eSalary : 25400,
    },
    {
      eFirstName : "C",
      eDesignation : "Angular Developer",
      eSalary : 25400,
    }

  ]

  employeeDisplay : boolean= false; 
  showData()
  {
      this.employeeDisplay = true;
  }
}
