import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe,UpperCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {

  private productService = inject(ProductService);
  private cartServices = inject(CartService);
  product = signal<Product | null>(null);
  cover = signal('');
  @Input() id_product?: string;


  ngOnInit() {

    if (this.id_product) {
      this.productService.getProductId(this.id_product)
        .subscribe({
          next: (products) => {      
            this.product.set(products);

            if(products.images.length > 0) {
              this.cover.set(this.productService.cleanAndParseImageUrl(products.images[0]));
            }
          },
          error: () => {
            console.error('Error API');
          }
        });
    }

  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCart()
  {
    const product = this.product();
    if(product){
      this.cartServices.addToCart(product)
    }
  }  


}
