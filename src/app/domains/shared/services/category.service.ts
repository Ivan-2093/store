import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@shared/models/category.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  constructor() { }

  getCategories() {
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories').pipe(
      map(categories =>
        categories.map(category => ({
          ...category,
          image: this.cleanAndParseImageUrl(category.image)
        }))
      )
    );
  }

  private cleanAndParseImageUrl(image: string): string {
    let cleanedImage = image.replace(/^\["?|"?]$/g, '');
    try {
      cleanedImage = JSON.parse(cleanedImage);
    } catch (error) {
      //
    }
    return cleanedImage;
  }

}
