import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
currentUser:User;
users:User[]=[];
  constructor(private authservice:AuthenticationService,private serve:AlertService) { }
username;
  ngOnInit(): void {
    this.username=localStorage.getItem('currentUser');
    
  //   this.serve.getMessage().subscribe(data=>{

  //  console.log(data);

  //   });
  }
 
  logOut(){
this.authservice.logOut();
  }
}
