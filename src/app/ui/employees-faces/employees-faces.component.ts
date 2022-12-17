import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { PersonModel } from "../../model/person.model";

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  styleUrls: ['./employees-faces.component.scss'],

  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesFacesComponent {
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {
  }
}
