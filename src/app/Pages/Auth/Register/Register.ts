import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { RegisterRequest } from './Register.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageServices } from 'src/app/Core/Services/Message-services';
@Component({
  selector: 'RegisterPage',
  templateUrl: './Register.html',
  styleUrls: ['./Register.css']
})
export class RegisterComponent implements OnInit {
  FormDataSource:RegisterRequest = new RegisterRequest();
  hide:boolean=true;
  constructor(private apiRequest:ApiServicesService,private router: Router,private Message: MessageServices){}

  ngOnInit(): void {
  }


  public store() {
    if(this.FormDataSource.RePassword !=  this.FormDataSource.Password){
      this.Message.Error("Cảnh báo","2 Mật khẩu không trùng nhau");
      return;
    } 
    return this.apiRequest.RequestPost("Register", this.FormDataSource).subscribe(v => {
      if(v.Result == 0){
        this.router.navigate(['/auth/login'], { queryParams: { username: v.Data.UserName } });
        this.Message.Success('Thành công',v.Message);
        return;
      }
      else{
        this.Message.Error("Cảnh báo",v.Message.replace(/\n/g, '<br>'));
        return;
      }
    });
  }
}
