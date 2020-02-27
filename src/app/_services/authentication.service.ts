import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    return this.http.get('http://127.0.0.1/angular/get.php?username='+username+'&password='+password);

  }
  logOut(){
    localStorage.removeItem('currentUser');
  }
}
