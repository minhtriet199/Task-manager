import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { ResetRequest } from './Reset.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ResetPage',
  templateUrl: './Reset.html',
  styleUrls: ['./Reset.css']
})
export class ResetComponent implements OnInit {
  constructor(private apiRequest:ApiServicesService, private router: Router,private route: ActivatedRoute){}
  FormDataSource:ResetRequest = new ResetRequest();
  hide:boolean=true;
  ngOnInit() {
  }
 
  public store() {
    return this.apiRequest.RequestGet("api/Mail/CheckEmail", this.FormDataSource).subscribe(v => {
      console.log(v);
    });
  }
}
