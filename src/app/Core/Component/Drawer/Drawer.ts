import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Shared/Shared.services';

@Component({
  selector: 'Drawer',
  templateUrl: './Drawer.html',
  styleUrls: ['./Drawer.css']
})
export class Drawer implements OnInit {
  hidden:string="flex fixed flex-col h-screen transform -translate-x-full duration-300";
  show:string="flex z-50 w-full fixed h-screen transition-transform duration-300";
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
  toggleSidebar(): void {
    const sidebarOpen = this.sharedService.getSidebarOpen();
    this.sharedService.setSidebarOpen(!sidebarOpen);
  }
}
