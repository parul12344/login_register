import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
message:any;
  constructor(private service:AlertService) { }

  ngOnInit(): void {
    this.service.getMessage().subscribe((message)=>{
      this.message=message;
    })
  }

}
