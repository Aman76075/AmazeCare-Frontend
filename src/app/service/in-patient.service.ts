import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InPatientService {
  private patientRegisterApi='http://localhost:8082/auth/sign-up/inPatient'
  private getInPatientDetailsApi='http://localhost:8082/inpatient/getDetails/'
  private updatePatientApi='http://localhost:8082/inpatient/updateDetails/'
  private getMedicalRecordApi='http://localhost:8082/medicalrecord/'
  private getReportApi='http://localhost:8082/reports/fetch/'
  private getAllDepartmentApi='http://localhost:8082/department/all'
  private getDoctorByDepartmentApi='http://localhost:8082/getDoctorByDepartment/'
  private getAllTimeSlotsApi='http://localhost:8082/doctor/getAllTimeSlots'
  private bookAppointmentApi='http://localhost:8082/appointment/book'

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
  patientDetails(uid:any):Observable<any>{
    const httpOptions={
          headers:new HttpHeaders({ 
            Authorization:'Bearer '+localStorage.getItem('token')
          })
        };
    return this.httpClient.get(this.getInPatientDetailsApi+uid,httpOptions);
  } 
  updatePatientDetails(pid:any,obj:any):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    let obj1={
      contact:obj.contact,
      email:obj.email
    }
    return this.httpClient.post(this.updatePatientApi+pid,obj1,httpOptions);
  }
  public getMedicalRecord(pid:any,page:number, size: number):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getMedicalRecordApi +pid+'?page='+page + '&size='+size,httpOptions);

  }
  public getReportDetails(pid:any,page:number, size: number):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getReportApi +pid+'?page='+page + '&size='+size,httpOptions)
  }
  getAllDepartment(){
    return this.httpClient.get(this.getAllDepartmentApi);
  }
  getDoctorByDepartment(dept:any){
    return this.httpClient.get(this.getDoctorByDepartmentApi+dept);
  }
  public getAllTimeSlots(){
    return this.httpClient.get(this.getAllTimeSlotsApi);
  }
  public bookAppointment(obj:any):Observable<any>{
    let bobj={
      date:obj.date,
      timeSlot:obj.timeSlot,
      patient:{
        id:localStorage.getItem('id')
      },
      doctor:{
        id:obj.doctor
      }
    }
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.bookAppointmentApi,bobj,httpOptions);


  }

}
