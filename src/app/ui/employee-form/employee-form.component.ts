import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from "../../model/create-employee.model";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})export class EmployeeFormComponent {
  readonly employeeForm:
    FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0), Validators.required]),
    salary: new FormControl(null, [Validators.min(0), Validators.required])
  });

  onButtonClicked(form: {
    name: string,
    age: string,
    salary: string
  }) {
    alert("User was successfully added to the database. Email: " + form.name + " Age: " + form.age + " Salary: " + form.salary);
  };

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: CreateEmployeeModel) {
    this._employeeService.create(form).subscribe();
  }
}
