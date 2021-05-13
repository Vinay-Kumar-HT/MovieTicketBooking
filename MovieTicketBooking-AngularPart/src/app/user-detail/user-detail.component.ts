import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Observable } from "rxjs";

import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

 
  id: number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService,private _location: Location) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  list(){
    this._location.back();
  }

  
 
  
    backClicked() {
      this._location.back();
    }

  updateEmployee() {
    this.userService.updateUser(this.id, this.user)
      .subscribe(data =>{ console.log(data);this.reloadData();this.gotoList();}, error => console.log(error));
  
  }
logout()
{
  this.router.navigate(['logout']);
}
  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['userDetails']);
  }
}



