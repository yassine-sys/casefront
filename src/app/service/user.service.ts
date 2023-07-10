import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ='http://127.0.0.1:8080/CaseTools-0.0.1-SNAPSHOT/rest/case'
// private baseUrl ='http://10.82.11.8:8080/CaseTools/rest/case'


  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    const url = `${this.baseUrl}/userlist`;
    return this.http.get<any>(url);
  }

  deleteUser(id:any) {
   
   
  
    return this.http.delete<any>(`${this.baseUrl}/deleteuser/${id}` );
  }

  addUser(user:any){
    return this.http.post(`${this.baseUrl}/add`,user);
  }

  public editUser(id:any,user:any){
    return this.http.put(`${this.baseUrl}/edituser/${id}`,user);
  }

  assignAlertUser(alerts:any){
    return this.http.post(`${this.baseUrl}/assignAlertUser`,alerts);
  }

  // login(login: string, password: string) {
  //   const loginData = {
  //     login: login,
  //     password: password
  //   };
  //   return this.http.post(`${this.baseUrl}/login`, loginData);
  // }
  login(loginData: any){
   
    return this.http.post<any>(`${this.baseUrl}/auth`, loginData);
  }

}
