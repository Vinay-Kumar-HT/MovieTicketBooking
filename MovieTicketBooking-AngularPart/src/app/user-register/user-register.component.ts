import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

 
  user: User = new User();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user)
      .subscribe(
      data => {
        
        this.router.navigate(['home',this.user.uid]);
        
        sessionStorage.setItem('user','this.user.uid')
      },
      error => {
        this.router.navigate(['register']);
        alert("Enter  credentials!!!");

      })
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
  
      this.router.navigate(['home',this.user.uid]);
    alert("Done");
  
}
}

