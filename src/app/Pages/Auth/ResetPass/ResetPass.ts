import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { ResetPassRequest } from './ResetPass.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ResetPassPage',
  templateUrl: './ResetPass.html',
  styleUrls: ['./ResetPass.css']
})
export class ResetPassComponent implements OnInit {
  constructor(private apiRequest:ApiServicesService, private router: Router,private route: ActivatedRoute){}
  FormDataSource:ResetPassRequest = new ResetPassRequest();
  hide:boolean=true;
  ngOnInit() {
  }
 
  public store() {
    return this.apiRequest.RequestPost("ResetPass", this.FormDataSource).subscribe(v => {
      
    });
  }
}
