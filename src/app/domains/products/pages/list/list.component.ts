import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ProductComponent } from './../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 10000,
        image: 'https://picsum.photos/320/320?r=1',
        creationDate: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 20000,
        image: 'https://picsum.photos/320/320?r=2',
        creationDate: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 30000,
        image: 'https://picsum.photos/320/320?r=3',
        creationDate: new Date().toISOString()
      },
    ]

    this.products.set(initProducts);

  }

  fromChild(event: String) {
    console.log('This is father!');
    console.log(event);
  }
}
