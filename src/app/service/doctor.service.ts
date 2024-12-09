import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private getAppointmentsApi='http://localhost:8082/doctor/appointment/getAll/'
  private generateMedicalRecordApi='http://localhost:8082/doctor/generateMedicalRecord/'
  private getTestAndScansTypeApi='http://localhost:8082/doctor/getAllTestType'
  private prescribeTestApi='http://localhost:8082/doctor/testnscans/'
  private getAllTimeSlotsApi='http://localhost:8082/doctor/getAllTimeSlots'
  private setScheduleApi='http://localhost:8082/doctor/setSchedule/'
  private updateDoctorDetails='http://localhost:8082/doctor/updateDoctor/'
  private getMedicalRecordApi='http://localhost:8082/medicalrecord/'
  private getReportApi='http://localhost:8082/reports/fetch/'
  private markAppointmentCompletedApi='http://localhost:8082/appointment/completed/'
  private docId=localStorage.getItem('id');

  constructor(private httpClient: HttpClient) { }

  public getAppointments():Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getAppointmentsApi+this.docId,httpOptions);
  }
  public generateMedicalRecord(obj:any,pid:number):Observable<any>{
    let mobj={
      prescription:obj.prescription,
      treatmentPlan:obj.treatmentPlan
    }
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.generateMedicalRecordApi+this.docId+'/'+pid,mobj,httpOptions);

  }
  public getAllTestType(){
    return this.httpClient.get(this.getTestAndScansTypeApi);
  }
  public prescribeTest(obj:any,pid:any):Observable<any>{
    let tobj={
      type:obj.testScansType,
      description:obj.description
    }
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.prescribeTestApi+this.docId+'/'+pid,tobj,httpOptions);

  }
  public setSchedule(obj:any):Observable<any>{
    let sObj={
      timeSlot:obj.timeSlot,
      totalSlots:obj.totalSlots,
      scheduleDate:obj.date
    }
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.setScheduleApi+this.docId,sObj,httpOptions);
  }
  public getAllTimeSlots(){
    return this.httpClient.get(this.getAllTimeSlotsApi);
  }
  public updateDoctor(obj:any){
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    let obj1={
      contact:obj.contact,
      email:obj.email
    }
    return this.httpClient.post(this.updateDoctorDetails+this.docId,obj1,httpOptions);
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
  public markCompleted(aid:number):Observable<any>{
    console.log('markCompletedcalled')
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.markAppointmentCompletedApi +aid,httpOptions)

  }

}
