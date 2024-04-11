import { Injectable } from '@angular/core';
import { Menu } from '../interface/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { } 
  MENUITEMS: Menu[] = [
    //-----dashboard:link
    {
      title: 'Dashboard',
      path: 'dashboard/default',
      icon: 'home',
      type: 'link',
      active: true,
    },
    // ----Products:Menu
    {
      title: 'Products',
      // path: '',
      icon: 'box',
      type: 'menu',
      active: false,
      children: [
        {
          title: 'Manage',
          type: 'menu',
          active: false,
          children: [
            {
              title: 'Product list',
              type: 'link',
              path: 'products/manage/product-list',
            },
            {
              title: 'Add Product',
              type: 'link',
              path: 'products/manage/add-product',
            },
          ],
        },
      ],
    },
    // ----Sales : Menu
    {
      title: 'Sales',
      // path: '',
      icon: 'dollar-sign',
      type: 'menu',
      active: false,
      children: [
        {
          title: 'Orders',
          type: 'link',
          path: 'sales/orders',
        },
        {
          title: 'Transactions',
          type: 'link',
          path: 'sales/transactions',
        },
      ],
    },
    //----Masters : Menu
    {
      title: 'Masters',
      // path: '',
      icon: 'clipboard',
      type: 'menu',
      active: false,
      children: [
        {
          title: 'BrandLogo',
          type: 'link',
          path: 'masters/brandlogo',
        },
        {
          title: 'Category',
          type: 'link',
          path: 'masters/category',
        },

        {
          title: 'Tag',
          type: 'link',
          path: 'masters/tag',
        },

        {
          title: 'Size',
          type: 'link',
          path: 'masters/size',
        },

        {
          title: 'Color',
          type: 'link',
          path: 'masters/color',
        },

        {
          title: 'Usertype',
          type: 'link',
          path: 'masters/usertype',
        },
      ],
    },
    //---Users : menu
    {
      title: 'Users',
      // path: '',
      icon: 'user-plus',
      type: 'menu',
      active: false,
      children: [
        {
          title: 'User List',
          type: 'link',
          path: 'users/list-user',
        },
        {
          title: 'Add User',
          type: 'link',
          path: 'users/add-user',
        },
      ],
    },
    //---Settings : Menu
    {
      title: 'Settings',
      // path: '',
      icon: 'settings',
      type: 'menu',
      active: false,
      children: [
        {
          title: 'Profile',
          type: 'link',
          path: 'settings/profile',
        },
      ],
    },
    //---Reports : Link
    {
      title: 'Reports',
      path: 'reports',
      icon: 'bar-chart',
      type: 'link',
      active: false,
    },
    //---Invoice : link
    {
      title: 'Invoice',
      path: 'invoice',
      icon: 'archive',
      type: 'link',
      active: false,
    },
    //---logout:link
    {
      title: 'Logout',
      path: 'auth/login',
      icon: 'log-out',
      type: 'link',
      active: false,
    },
  ];
}
