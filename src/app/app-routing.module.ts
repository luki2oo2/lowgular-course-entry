import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeFormComponent } from './ui/employee-form/employee-form.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { EmployeeFormComponentModule } from './ui/employee-form/employee-form.component-module';

const routes: Routes = [{ path: 'employee-list', component: EmployeeListComponent }, { path: 'employee-form', component: EmployeeFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule, EmployeeServiceModule, EmployeeFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
