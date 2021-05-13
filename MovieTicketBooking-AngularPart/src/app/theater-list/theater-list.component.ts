import { Component, OnInit } from '@angular/core';
import { TheaterService } from '../theater.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Theater } from '../theater';
import { Observable } from "rxjs";
import {Location} from '@angular/common';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrls: ['./theater-list.component.css']
})
export class TheaterListComponent implements OnInit {

  theater: Observable<Theater[]>;

  constructor(private theaterService: TheaterService,
    private router: Router,private _location: Location) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.theater = this.theaterService.getAllTheaters();
  }
/*
  bookingMovie(id: number) {
    this.router.navigate(['book', id]);
  }
*/
logout()
{
  this.router.navigate(['logout']);
}

backClicked() {
  this._location.back();
}
   
}



