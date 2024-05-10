import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ProductComponent } from './../../components/product/product.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  fromChild(event: String){
    console.log('This is father!');
    console.log(event);
  }
}
