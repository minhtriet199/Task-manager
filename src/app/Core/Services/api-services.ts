import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Configuration, DataResult, LoginDataResult } from '../Storage/Helper';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http:HttpClient,private configuration:Configuration) { }

  public Request(url:string){
    return this.http.get<DataResult>(this.configuration.Base_URL+url,{headers:this.RequestHeader()});
  }

  public RequestPost(url:string,data:any){
    return this.http.post<LoginDataResult>(this.configuration.Base_URL+url, data);
  }

  public RequestHeader():HttpHeaders | { [header: string]: string | string[]; }{
    var header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + localStorage.getItem('Token'),
    });
    return header;
  }
}
