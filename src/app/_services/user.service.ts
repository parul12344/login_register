import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  register(user){
    console.log(user);
    return this.http.post('http://127.0.0.1/angular/post.php',user)
  }
}
