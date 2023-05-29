import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'PopUpTemplate',
  templateUrl: './PopUpTemplate.html',
  styleUrls: ['./PopUpTemplate.css']
})
export class PopUpTemplate implements OnInit {
  @Input() ColumnSettings:string = "";
  @Input() ListDataSource:any;
  Columns:any;
  ngOnInit(){
  
  }
}
