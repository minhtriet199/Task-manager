import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { LoginRequest } from './Login.model';
import { AccessToken } from 'src/app/Core/Storage/Helper';
import { Router } from '@angular/router';


@Component({
  selector: 'LoginPage',
  templateUrl: './Login.html',
  styleUrls: ['./Login.css']
})
export class LoginComponent implements OnInit {
  constructor(private apiRequest:ApiServicesService, private router: Router){}
  FormDataSource:LoginRequest = new LoginRequest();
  ngOnInit(): void {
  }

  public store(){
    return this.apiRequest.RequestPost("Login",this.FormDataSource).subscribe(v=>{
      AccessToken.SetAccessToken(v.Token);
      AccessToken.SetUserInfo();
      if(v.Token){
        this.router.navigate(["employee/list"]);
      }
    })
  }

}
