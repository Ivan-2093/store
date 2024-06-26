import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, ReversePipe,TimeAgoPipe, RouterLink],
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
