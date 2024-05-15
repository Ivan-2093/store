import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent],
  /* templateUrl: './app.component.html', */
  template: '<app-header/><router-outlet/>',
  /* styleUrl: './app.component.css' */
})
export class AppComponent {
  title = 'store';
}
