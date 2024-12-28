import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InPatientService {
  private patientRegisterApi='http://localhost:8082/auth/sign-up/inPatient'

  constructor(private httpClient: HttpClient) { }
  patientRegister(obj:any):Observable<any>{
    let pobj={
      name:obj.name,
      gender:obj.gender,
      age:obj.age,
      email:obj.email,
      contact:obj.contact,
      emergency_contact:obj.emergency_contact,
      aadhar:obj.aadhar,
      address:obj.address,
      allergies:obj.allergies,
      patient:{
        user:{
          username:obj.username,
          password:obj.password
        }
      }

    }
    return this.httpClient.post(this.patientRegisterApi,pobj);
  }

}
