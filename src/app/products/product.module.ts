import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from 'src/app/products/product-detail/product-detail.component';
import { ProductListComponent } from 'src/app/products/product-listtings/product-listtings.component';
import { ProductComponent } from 'src/app/products/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [],
  bootstrap: [],
})
export class ProductModule {}
