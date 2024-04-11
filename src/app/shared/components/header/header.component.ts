import { Component, OnInit } from '@angular/core';
import { Global } from '../../utility/global';
import { CollapseService } from '../../services/collapse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //  userImage : string = "../../../../assets/images/user.png"
  userImage: string = 'assets/images/user.png';

  constructor( public _CollapseService :CollapseService) {}

  ngOnInit(): void { 
    let userdetails = JSON.parse(localStorage.getItem('userDetails'));  
    this.userImage = (userdetails.imagePath == '' || userdetails.imagePath == null) ? "assets/images/user.png" :  Global.BASE_USERS_IMAGES_PATH + userdetails.imagePath;

  } 


  collapseSidebar(){ 
   this._CollapseService.openSidebar = !this._CollapseService.openSidebar; 
   
  }
}
