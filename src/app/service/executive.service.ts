import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecutiveService {
  private getAllDoctorsApi='http://localhost:8082/api/doctor/all'
  private getAllDepartmentApi='http://localhost:8082/department/all'
  private doctorRegisterApi='http://localhost:8082/auth/sign-up/doctor'
  private getAllLabOperatorApi='http://localhost:8082/api/labOperator/all'
  private labOperatorRegisterApi='http://localhost:8082/auth/sign-up/lab-operator'
  private getExecutiveDetailsApi='http://localhost:8082/api/executive/getDetailsById/'
  private updateExecutiveDetailsApi='http://localhost:8082/api/executive/update/'

  constructor(private httpClient: HttpClient) { }
  getAllDoctors(){
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getAllDoctorsApi,httpOptions)
  }
  getAllLabOperators(){
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getAllLabOperatorApi,httpOptions)
  }
  getAllDepartment(){
    return this.httpClient.get(this.getAllDepartmentApi);
  }
  public registerDoctor(obj:any):Observable<any>{
    let docObj={
      name:obj.name,
      email:obj.email,
      contact:obj.contact,
      experience:obj.experience,
      department:obj.department,
      user:{
        username:obj.username,
        password:obj.password
      }
    }
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.doctorRegisterApi,docObj,httpOptions)
  }
  public registerLabOperator(obj:any):Observable<any>{
    let loObj={
      name:obj.name,
      email:obj.email,
      contact:obj.contact,
      experience:obj.experience,
      salary:obj.salary,
      user:{
        username:obj.username,
        password:obj.password
      }
    }
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.post(this.labOperatorRegisterApi,loObj,httpOptions)
  }
  public getExecutiveDetails():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getExecutiveDetailsApi+localStorage.getItem('id'),httpOptions);
  }
  public updateExecutive(obj:any){
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    let obj1={
      contact:obj.contact,
      email:obj.email
    }
    return this.httpClient.post(this.updateExecutiveDetailsApi+localStorage.getItem('id'),obj1,httpOptions);
  }
  
}
