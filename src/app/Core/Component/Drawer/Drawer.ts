import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/Shared.services';
import { ApiServicesService } from '../../Services/api-services';

@Component({
  selector: 'Drawer',
  templateUrl: './Drawer.html',
  styleUrls: ['./Drawer.css']
})
export class Drawer implements OnInit {
  hidden:string="flex z-10 w-full  fixed flex-col h-screen transform -translate-x-full duration-300 ";
  show:string="flex z-10 w-full fixed h-screen transition-transform duration-300";
  userName:string="";
  ToggleProject:boolean=true;
  SearchQuery:string="";

  ProjectNameList?:any;
  constructor(private sharedService: SharedService,private apiRequest:ApiServicesService ){}

  ngOnInit(){
    this.Getlist();
  }
  isSidebarOpen(){
    return this.sharedService.getSidebarOpen();
  }
  onChangeRoute(){
    const sidebarOpen = this.sharedService.getSidebarOpen();
    this.sharedService.setSidebarOpen(false);
  }
  toggleSidebar() {
    const sidebarOpen = this.sharedService.getSidebarOpen();
    this.sharedService.setSidebarOpen(!sidebarOpen);
  }
  ShowProject(){
    this.ToggleProject = !this.ToggleProject;
  }
  public Getlist(){
    return this.apiRequest.RequestGet("api/Project/GetList",{ Name: this.SearchQuery }).subscribe(v=>{
      this.ProjectNameList = v.Data;
    })
  }
}
