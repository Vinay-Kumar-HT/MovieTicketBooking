import { Component, OnInit } from '@angular/core';
import{Booking} from '../booking';
import{Theater} from '../theater';
import {BookingService} from '../booking.service';
import {TheaterService} from '../theater.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../Movie';

import { MovieService } from '../movie.service';
import { Observable } from "rxjs";
import {Location} from '@angular/common';


@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css']
})
export class MovieBookingComponent implements OnInit {

  booking: Booking = new Booking();
  theater:Observable<Theater>;
  submitted = false;
  id:number;

  constructor(private bookingService: BookingService,private route: ActivatedRoute,private theaterService: TheaterService,
    private router: Router,private _location: Location) { }

  ngOnInit() {
  

  this.id = this.route.snapshot.params['id'];
  }
  newUser(): void {
    this.submitted = false;
    this.booking =  new Booking();
  }

  save() {

this.booking.mid=this.id;
if(this.booking.coupon!=null)
{
this.booking.totalPrice=this.booking.noOfSeats*80;
}
else{
  this.booking.coupon="noCoupon";
  this.booking.totalPrice=this.booking.noOfSeats*100;
}
this.bookingService.addBooking(this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
      this.booking =  new Booking();

    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  check_en(v1:any){

    if(v1 == true){
        document.getElementById('coupon').setAttribute("disabled","false");                  
    }
    else{
        document.getElementById('coupon').removeAttribute("disabled")    
    }    

}



  gotoList() {
    var data = sessionStorage.getItem("user");
     // this.router.navigate(['home',data]);
     this._location.back();
    alert("Done");
  
}
}

