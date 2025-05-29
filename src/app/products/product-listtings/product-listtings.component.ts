import { Component } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-listtings',
  templateUrl: './product-listtings.component.html',
  styleUrls: ['./product-listtings.component.scss'],
})
export class ProductListComponent {
  products = products;
}
