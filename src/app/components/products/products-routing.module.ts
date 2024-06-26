import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './manage/product-list/product-list.component';
import { AddProductComponent } from './manage/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'manage/product-list', component: ProductListComponent },
      { path: 'manage/add-product', component: AddProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
