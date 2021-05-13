import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieHomeComponent} from './movie-home/movie-home.component';
import {MovieReviewComponent} from './movie-review/movie-review.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import{UserDetailComponent} from './user-detail/user-detail.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {TheaterListComponent} from './theater-list/theater-list.component';
import {MovieBookingComponent} from './movie-booking/movie-booking.component';
import {ViewBookingComponent} from './view-booking/view-booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'booking/:id', component: MovieBookingComponent },
  { path: 'viewBooking/:id', component: ViewBookingComponent },
  { path: 'theater', component: TheaterListComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'home/:id', component: MovieHomeComponent },
  { path: 'userDetails/:id', component: UserDetailComponent },
  { path: 'home', component: MovieHomeComponent },
  { path: 'reviewAll', component: MovieReviewComponent },
  { path: 'review/:id', component: MovieReviewComponent },
  { path: 'details/:id', component: MovieDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
