import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Observable } from "rxjs";
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {

 
  id: number;
  movie: Movie;
  movies: Observable<any[]>;

  constructor(private route: ActivatedRoute,private router: Router,
    private movieService: MovieService,private _location: Location) { }

  ngOnInit() {
  
    this.movies = this.movieService.getAllMovies();
      this.reloadPage();
    }
  
    reloadPage()
    {
      this.reloadData();
    }
    reloadData() {
      this.movies = this.movieService.getAllMovies();
    

    this.movie = new Movie();

    this.id = this.route.snapshot.params['id'];
    
    this.movieService.getMovieById(this.id)
      .subscribe(data => {
        console.log(data)
        this.movie = data;
       
      }, error => console.log(error));
  }

 
    
  addReview() {
    this.movieService.addReview(this.id, this.movie)
      .subscribe(data => {console.log(data);this.reloadPage();}, error => console.log(error));
  
  
  }

  backClicked() {
    this._location.back();
  }
    
  

  updateReview(mid: number){
    this.router.navigate(['review', mid]);
    this.reloadPage();
  }

  onSubmit() {
    this.addReview();    
  }
logout()
{
  this.router.navigate(['logout']);
}
  gotoList() {
    this.router.navigate(['review',this.id]);
    this.reloadPage();
  }
}
