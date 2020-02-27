import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {UserService} from '../_services/user.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../_services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  constructor(private userservice:UserService,private service:AlertService,private route:Router) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      username:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    });
  }
  onSubmit(){
    this.submitted=true;
return new Promise((resolve,reject)=>{
  this.userservice.register(this.registerForm.value)
  .pipe(first())
  .subscribe(data => {
    resolve(data);
  this.service.success('Registration Successful');
  this.route.navigate(['/login']);
  },
  error => {
    console.log(error);
    this.service.error("Not Registered");
  });
});


  }
async fetchData(){
   let result=await this.onSubmit();
   return result;
}

}
