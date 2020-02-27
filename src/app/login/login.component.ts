import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthenticationService,private route:Router,private service:AlertService) { }
  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  });
  ngOnInit(): void {
     
  }
     
  onSubmit(){
this.authservice.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(data=>{
  localStorage.setItem('currentUser',this.loginForm.value.username);
this.service.sendData(data);
this.service.success("Login succesful");
this.route.navigate(['/home']);
},error=>{
this.service.error('Invalid User');
});

  }
}
