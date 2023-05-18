import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { LoginRequest } from './Login.model';
import { AccessToken } from 'src/app/Core/Storage/Helper';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'LoginPage',
  templateUrl: './Login.html',
  styleUrls: ['./Login.css']
})
export class LoginComponent implements OnInit {
  constructor(private apiRequest:ApiServicesService, private router: Router,private route: ActivatedRoute){}
  FormDataSource:LoginRequest = new LoginRequest();
  hide:boolean=true;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const username = params['username'];
      if (username) {
        this.FormDataSource.UserName = username;
      }
    });
  }
 
  public store() {
    return this.apiRequest.RequestPost("Login", this.FormDataSource).subscribe(v => {
      AccessToken.SetAccessToken(v.Data.Token);
      AccessToken.SetUserInfo();
      if (v.Data.Token) {
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        this.router.navigateByUrl('auth/login');
      }
    });
  }
}
