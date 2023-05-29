import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Core/Services/api-services';
import { AccessToken } from 'src/app/Core/Storage/Helper';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageServices } from 'src/app/Core/Services/Message-services';


@Component({
  selector: 'DashBoardPage',
  templateUrl: './DashBoard.html',
  styleUrls: ['./DashBoard.css']
})
export class DashBoardComponent {
  
}
