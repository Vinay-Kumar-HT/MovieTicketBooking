import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';
import { Observable } from "rxjs";
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movies: Movie;
 
id:number;
  constructor(private movieService: MovieService,private route: ActivatedRoute,
    private router: Router,private _location: Location) {}

  ngOnInit() {
    this.movies=new Movie;
    //this.id = this.route.snapshot.params['id'];
    this.id=11;
  
  
    this.movieService.getMovieById(this.id)
    .subscribe(data => {
      console.log(data)
      this.movies = data;
    }, error => console.log(error));
  }
/*
  bookingMovie(id: number) {
    this.router.navigate(['book', id]);
  }
*/


backClicked() {
  this._location.back();
}
  
logout()
{
  this.router.navigate(['login']);
}
bookMovie(id:number)
{
  this.router.navigate(['booking', id]);
}
  addReview(id: number){
    this.router.navigate(['review', id]);
  }
}



