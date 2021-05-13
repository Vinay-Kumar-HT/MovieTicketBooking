import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { TheaterListComponent } from './theater-list/theater-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    MovieHomeComponent,
    MovieDetailComponent,
    MovieReviewComponent,
    UserDetailComponent,
    MovieBookingComponent,
    ViewBookingComponent,
    TheaterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
