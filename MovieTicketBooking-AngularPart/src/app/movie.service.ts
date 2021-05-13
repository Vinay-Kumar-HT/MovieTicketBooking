
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:8086//api/movie/movies';
  private ur1='http://localhost:8086//api/movie/movies/allReview';
  constructor(private http: HttpClient) { }

  getMovieById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  addReview(id: number, Movie: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, Movie);
  }

  /*deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/
viewAllReview():Observable<any>
{
  return  this.http.get(`${this.ur1}`);
}

  getAllMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
