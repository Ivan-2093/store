import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, ReversePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService)
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

}
