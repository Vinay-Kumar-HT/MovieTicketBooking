import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  private baseUrl = 'http://localhost:8086//api/user/user';

  constructor(private http: HttpClient) { }

  userLogin( uname:string,password:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${uname}/${password}`,  { responseType: 'text' });
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }
getUserById( id:number): Observable<any>{
  return this.http.get(`${this.baseUrl}/${id}`);
}
getIdByUserAndPass( uid:number,password:string): Observable<any>{
  return this.http.get(`${this.baseUrl}/${uid}/${password}`);
}

updateUser(id: number, User: Object): Observable<Object> {
  return this.http.put(`${this.baseUrl}/${id}`, User);
}
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }




}

