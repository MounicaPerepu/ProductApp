import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = [];

  constructor(private httpClient: HttpClient) { }

  addToCart(product: Products): void {
    this.items.push(product);
  }

  getItems(): Products[] {
    return this.items;
  }

  clearCart(): Products[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<{type: string, price: number}[]> {
    return this.httpClient.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
