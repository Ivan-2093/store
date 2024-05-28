import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/shared/components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  /* templateUrl: './app.component.html', */
  template: '<router-outlet/>',
  /* styleUrl: './app.component.css' */
})
export class AppComponent {
  title = 'store';
}
