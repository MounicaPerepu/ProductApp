import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { Constants } from '../constants';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Products | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = Constants.products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Products): void {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
}
