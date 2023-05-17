import { Injectable } from '@angular/core';
import { AccessToken, UserInfo, getCurrentTime } from '../Storage/Helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private UserInfo:UserInfo){}

  isAuthenticated(): boolean {
    const token = AccessToken.GetAccessToken();
    const currentTimeStamp = new getCurrentTime().Currenttime;
    const expr_Date = Number(this.UserInfo.expr_Date);

    if (token && this.UserInfo.expr_Date && expr_Date > currentTimeStamp){
      return true;
    }
    return false;
  }
}
