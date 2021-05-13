import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  movies: Observable<Movie[]>;
user={}
  constructor(private movieService: MovieService,private route: ActivatedRoute,private userService: UserService,private http: HttpClient,
    private router: Router) {   http.get('resource').subscribe(data => this.user = data);}

    
  
   
id:number;
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.movies = this.movieService.getAllMovies();
    this.id = this.route.snapshot.params['id'];
  }
/*
  bookingMovie(id: number) {
    this.router.navigate(['book', id]);
  }
*/
logout()
{
  this.router.navigate(['login']);
}
viewAllReview()
{

  this.router.navigate(['reviewAll']);

}
viewBooking()
{
  this.router.navigate(['viewBooking',this. id]);
}
  movieDetails(id: number){
    this.router.navigate(['details', id]);
  }

  addReview(id: number){
    this.router.navigate(['review', id]);
  }
  theaterList()
  {
    this.router.navigate(['theater']);
  }
  viewUser()
  {
    this.router.navigate(['userDetails',this.id]);
  }
  bookMovie(id:number)
  {
    this.router.navigate(['booking',id]);
  }

}



