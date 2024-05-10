import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input({required: true}) img: String = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: String = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler()
  {
    console.log('Clicked from son');
    this.addToCart.emit(this.title + ' ha sido seleccionado!');
  }

}