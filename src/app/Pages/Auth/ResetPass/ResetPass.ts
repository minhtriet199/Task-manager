import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { ResetPassRequest } from './ResetPass.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageServices } from 'src/app/Core/Services/Message-services';


@Component({
  selector: 'ResetPassPage',
  templateUrl: './ResetPass.html',
  styleUrls: ['./ResetPass.css']
})
export class ResetPassComponent implements OnInit {
  constructor(private apiRequest:ApiServicesService, private router: Router,private route: ActivatedRoute,private Message: MessageServices){}
  FormDataSource:ResetPassRequest = new ResetPassRequest();
  hide:boolean=true;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.FormDataSource.Token = params['Token'];
      this.FormDataSource.UserID = params['UserID'];
    });
    if(this.FormDataSource.UserID == null && this.FormDataSource.Token == null){
      this.router.navigate(['/auth/reset']);
      this.Message.Error("Lỗi",'Có lỗi vui lòng thử lại');
    }
  }
 
  public store() {
    if(this.FormDataSource.Password != this.FormDataSource.RePassWord){
      this.Message.Error("Lỗi","2 Mật khẩu không trùng nhau");
      return;
    }
    return this.apiRequest.RequestPost("api/User/UpdatePassword", this.FormDataSource).subscribe(v => {
      if(v.Result != 0){
        this.router.navigate(['/auth/reset']);
        this.Message.Error("Lỗi",v.Message);
        return;
      }
      else{
        this.router.navigate(['/auth/login']);
        this.Message.Success("Thành công",v.Message);
        return;
      }
    });

    
  }
}
