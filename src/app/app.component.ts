import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from './Core/Shared/Shared.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private sharedService: SharedService){}

  title = 'Project1-app';
}
