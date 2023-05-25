import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { UserInfo, getCurrentTime } from 'src/app/Core/Storage/Helper';

@Component({
  selector: 'app-employees',
  templateUrl: './Employees.list.html',
  styleUrls: ['./Employees.list.css']
})
export class EmployeesList implements OnInit {
  ListDataSource:any;
  ColumnSettings:string="";

  hovered:boolean=false;
  Newposition?:string;
  Newposition2?:string;

  constructor(private apiRequest:ApiServicesService,private UserInfo:UserInfo){}

  ngOnInit(): void {
    this.ColumnSettings = "Id,UserName,Email,CreatedDate,UpdatedDate";
    this.getList();
  }

  public getList(){
    return this.apiRequest.RequestGet("api/User/Getlist").subscribe(v=>{
      this.ListDataSource = v.Data;
    })
  }



}
