import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/Shared.services';

@Component({
  selector: 'SideBarTemplate',
  templateUrl: './SideBarTemplate.html',
  styleUrls: ['./SideBarTemplate.css']
})
export class SideBarTemplate implements OnInit {
  hidden:string="flex fixed flex-col h-screen transform -translate-x-full duration-300";
  show:string="z-40 w-64 h-screen transition-transform  sm:translate-x-0 duration-300";
  userName:string="";

  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
  }
  isSidebarOpen(){
    return this.sharedService.getSidebarOpen();
  }
  onChangeRoute(): void {
    const sidebarOpen = this.sharedService.getSidebarOpen();
    this.sharedService.setSidebarOpen(false);
  }

}
