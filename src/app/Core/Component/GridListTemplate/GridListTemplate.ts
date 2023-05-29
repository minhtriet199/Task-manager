import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'GridListTemplate',
  templateUrl: './GridListTemplate.html',
  styleUrls: ['./GridListTemplate.css']
})
export class GridListTemplate implements OnInit {
  @Input() ColumnSettings:string = "";
  @Input() ListDataSource:any;
  Columns:any;
  ngOnInit(){
    this.Columns = this.ColumnSettings.split(",");
  }
}
