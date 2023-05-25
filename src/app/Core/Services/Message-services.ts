import { Injectable, ViewChild } from '@angular/core';
import { AccessToken, UserInfo, getCurrentTime } from '../Storage/Helper';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageServices {


    public Success(Title:string,Message:string){
      Swal.fire(Title,Message,'success');
    }
    public Error(Title:string,Message:string){
      Swal.fire(Title,Message,'error');
    }
}
