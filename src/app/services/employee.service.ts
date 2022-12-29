import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { EmployeeResponse } from "./employee.response";
import { ApiResponse } from "./api.response";
import { HttpClient } from "@angular/common/http";
import { CreateEmployeeModel } from "../model/create-employee.model";
import { PersonModel } from "../model/person.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees'
    ).pipe(
      map((response: ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return{
            personalNumber: employeeResponse.id,
            name: employeeResponse.employee_name,
            mail: employeeResponse.employee_name + "@lowgular.io",
            img: employeeResponse.profile_image
          }
        });
      })
    )
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post("https://dummy.restapiexample.com/api/v1/create", employee).pipe(map(_ => void 0));
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete("https://dummy.restapiexample.com/api/v1/delete/" + id).pipe(map(_ => void 0));
  }

}
