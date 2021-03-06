import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
private subject=new Subject<any>();
  constructor() { }
success(message:string){
this.subject.next({type:'success',text:message});
}
error(message:string){
  this.subject.next({type:'error',text:message});
  }
  getMessage(){
    return this.subject.asObservable();
  }
  sendData(data){
this.subject.next(data);
  }

}
