import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { ResetRequest } from './Reset.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageServices } from 'src/app/Core/Services/Message-services';


@Component({
  selector: 'ResetPage',
  templateUrl: './Reset.html',
  styleUrls: ['./Reset.css']
})
export class ResetComponent implements OnInit {
  constructor(private apiRequest:ApiServicesService, private router: Router,private route: ActivatedRoute,private Message:MessageServices){}
  FormDataSource:ResetRequest = new ResetRequest();
  hide:boolean=true;
  ngOnInit() {
  }
 
  public store() {
    return this.apiRequest.RequestGet("api/Mail/CheckEmail", this.FormDataSource).subscribe(v => {
      if(v.Result == 0){
        Swal.fire('Success', v.Message, 'success');
        this.Message.Success('Thành công',v.Message);
        return ;
      }
      else{
        Swal.fire('Error', v.Message, 'error');
        this.Message.Error('Cảnh báo',v.Message);
        return;
      }
    });
  }
}
