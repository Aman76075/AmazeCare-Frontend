import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private getAllExecutivesApi='http://localhost:8082/api/getAllExecutives'
  private registerExecutiveApi='http://localhost:8082/auth/sign-up/executive'
  private userStatApi = 'http://localhost:8082/api/users-stat';

  constructor(private httpClient: HttpClient) { }
  getAllExecutives(){
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.getAllExecutivesApi,httpOptions)
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
    return this.httpClient.post(this.registerExecutiveApi,loObj,httpOptions)
  }
  public getUserStat(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer '+ localStorage.getItem('token')
      })
    };
    return this.httpClient.get(this.userStatApi,httpOptions);
  }
}
