import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../Storage/Helper';
import { Router } from '@angular/router';
import { SharedService } from '../../Shared/Shared.services';

@Component({
  selector: 'NavigationBarTemplate',
  templateUrl: './NavigationBarTemplate.html',
  styleUrls: ['./NavigationBarTemplate.css']
})
export class NavigationBarTemplate implements OnInit {
  hover:boolean=false;
  userName:string="";

  constructor(private UserInfo:UserInfo,private router:Router,private sharedService: SharedService){}

  ngOnInit(){
    this.userName = this.UserInfo.userName? this.UserInfo.userName : "";  
  }

  onHover(){
    this.hover=!this.hover;
  }
  LogOut(){
    localStorage.clear();
    this.router.navigateByUrl('auth/login');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  toggleSidebar(){
    const sidebarOpen = this.sharedService.getSidebarOpen();
    this.sharedService.setSidebarOpen(!sidebarOpen);
  }
}
