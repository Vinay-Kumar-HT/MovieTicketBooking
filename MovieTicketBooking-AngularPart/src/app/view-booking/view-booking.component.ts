import { Component, OnInit } from '@angular/core';
import {BookingService } from '../booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { Observable } from "rxjs";
import {Location} from '@angular/common';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  booking: Observable<Booking[]>;
  id:number;

  constructor(private route: ActivatedRoute,private bookingService:BookingService,
    private router: Router,private _location: Location) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
  }
  reloadData(){    
  
  


    this.bookingService.getBookingById(this.id)
    .subscribe(data => {
      console.log(data)
      this.booking = data;
    }, error => console.log(error));
  
  }

deleteBooking(id:number)
{
  this.bookingService.deleteBooking(id)
  .subscribe(data => {
    console.log(data);
    this.reloadData();
  }, error => console.log(error));
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

