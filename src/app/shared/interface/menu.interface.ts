export interface Menu {
    title: string;
    path?: string;
    icon?: string;
    type: string; //for menu or link define
    active?: boolean;
    children?: Menu[];//menu mai jo option hai unke bhi submenu ka interface Menu rahega
  }
  