import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:8086//api/booking/bookings';

  constructor(private http: HttpClient) { }

deleteBooking(id:number): Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
}
  getBookingById(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
addBooking(booking: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, booking);
  }

}
