import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { RegisterRequest } from './Register.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'RegisterPage',
  templateUrl: './Register.html',
  styleUrls: ['./Register.css']
})
export class RegisterComponent implements OnInit {
  FormDataSource:RegisterRequest = new RegisterRequest();
  hide:boolean=true;
  constructor(private apiRequest:ApiServicesService,private router: Router){}

  ngOnInit(): void {
  }


  public store() {
    if(this.FormDataSource.RePassword !=  this.FormDataSource.Password){
      Swal.fire('Error', '2 Mật khẩu không trùng nhau', 'error');
      return;
    } 
    return this.apiRequest.RequestPost("Register", this.FormDataSource).subscribe(v => {
      this.router.navigate(['/auth/login'], { queryParams: { username: v.Data.UserName } });
    });
  }
}
