import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  private baseUrl = 'http://localhost:8086//api/theater/theaters';
 
  constructor(private http: HttpClient) { }

  getAllTheaters(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
