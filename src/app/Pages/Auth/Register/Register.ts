import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';

@Component({
  selector: 'RegisterPage',
  templateUrl: './Register.html',
  styleUrls: ['./Register.css']
})
export class RegisterComponent implements OnInit {
  constructor(private apiRequest:ApiServicesService){}

  ngOnInit(): void {
  }



}
