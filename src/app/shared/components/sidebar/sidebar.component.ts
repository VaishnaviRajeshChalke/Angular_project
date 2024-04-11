import { Component, OnInit } from '@angular/core';
import { Global } from '../../utility/global';
import { CollapseService } from '../../services/collapse.service';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../interface/menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userImage: string = 'assets/images/user.png';
  logoimg : string = "assets/images/logo.png" 
  fullName : string = ""; 
  EmailId : string = ""; 
  // openSidebar : boolean = false; 
menuItems : Menu[] = [];

  
 constructor(public _menuservice : MenuService) { }
  ngOnInit(): void {
    let userdetails = JSON.parse(localStorage.getItem('userDetails')); 
   
    this.fullName =`${userdetails.firstName} ${userdetails.lastName}`; 

    this.EmailId = `${userdetails.email}`; 
  this.userImage = (userdetails.imagePath == '' || userdetails.imagePath == null) ? "assets/images/user.png" :  Global.BASE_USERS_IMAGES_PATH + userdetails.imagePath;
  
this.menuItems = this._menuservice.MENUITEMS;
  }
//   collapseSidebar(){ 
//     this.openSidebar = !this.openSidebar; 
    
//    }


toggleNavActive(menuItem: Menu) {
  menuItem.active = !menuItem.active;
}


 }
