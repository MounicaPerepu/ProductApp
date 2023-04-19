import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { Constants } from '../constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Products[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = Constants.products;
  }

  share(): void {
    alert('The product has been shared!');
  }

  onNotify(): void {
    alert('You will be notified when the product goes on sale');
  }
}
