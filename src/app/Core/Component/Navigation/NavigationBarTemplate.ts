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
  hidden:string="hidden absolute left-0 py-2 w-32";
  show:string="absolute left-0 py-2 w-32";
  hover:boolean=false;
  userName:string="";

  constructor(private UserInfo:UserInfo,private router:Router,private sharedService: SharedService){}

  ngOnInit(): void {
    this.userName = this.UserInfo.userName? this.UserInfo.userName : "Login";  
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

  toggleSidebar(): void {
    const sidebarOpen = this.sharedService.getSidebarOpen();
    this.sharedService.setSidebarOpen(!sidebarOpen);
  }
}
