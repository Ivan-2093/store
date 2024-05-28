import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLinkWithHref } from '@angular/router';


import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared//services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent,HeaderComponent,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input() category_id?: string;

  

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges)
  {
    this.getProducts(); 
  }

  getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        console.error('Error API');
      } 
    });
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {
        console.error('Error API');
      } 
    });
  }

 
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
