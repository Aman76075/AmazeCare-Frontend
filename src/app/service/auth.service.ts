import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginApi='http://localhost:8082/api/token';
  private userDetailsApi='http://localhost:8082/auth/userDetails'
  private doctorDetailsApi='http://localhost:8082/doctor/getDetails/'

  constructor(private httpClient: HttpClient) { }
  login(user: any) : Observable<any>{
    return this.httpClient.post(this.loginApi,user);
  }
  getUserDetails(token: any) : Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({ 
        Authorization:'Bearer '+token
      })
    };
    return this.httpClient.get(this.userDetailsApi,httpOptions);
  }
  getDoctorDetailsById() : Observable<any>{
    return this.httpClient.get(this.doctorDetailsApi+localStorage.getItem('id'));

  }

}
