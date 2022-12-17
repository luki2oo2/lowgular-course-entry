import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup(
    { email: new FormControl(null, [Validators.required]),
              age: new FormControl(null, [Validators.min(18), Validators.required]),
              salary: new FormControl(null, [Validators.required])
    });

  onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    alert(`User was successfully aded to the database. Email: ${employeeForm.value.email}, Age: ${employeeForm.value.age}, Salary: ${employeeForm.value.salary}`)
  }
}
