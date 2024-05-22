import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input({required: true}) product!: Product;
/* 
  @Input({required: true}) img: String = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: String = ''; */

  @Output() addToCart = new EventEmitter();

  addToCartHandler()
  {
    this.addToCart.emit(this.product);
  }

}
