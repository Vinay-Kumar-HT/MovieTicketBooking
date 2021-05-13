import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user.service';
import { Router ,ActivatedRoute} from '@angular/router';

import {FormGroup,FormControl,Validator,Validators} from '@angular/forms';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

 
  user: User = new User();
  submitted = false;
  id:number;
userid:string;


  constructor(private route: ActivatedRoute,private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  

  reloadData() {
   
  }
 // this.id = this.route.snapshot.params['id'];

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  login()
  {
    this.userService.getIdByUserAndPass(this.user.uid,this.user.password)
    .subscribe(
      data => {
        
        this.router.navigate(['home',this.user.uid]);
        
        sessionStorage.setItem('user','this.user.uid')
      },
      error => {
        this.router.navigate(['login']);
        alert("Invalid login credentials!!!")

      })

}


 
  onLogin()
  {
    this.submitted=true;
    this.login();
  }
   
  
register()
{
  this.router.navigate(['register']);
}

  gotoLogin() {

    this.router.navigate(['/home',this.user.uid]);
    alert("Done Login");
  }

}


