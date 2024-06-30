import { Component } from '@angular/core';
import { us_cities } from '../cities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '0624';
  cities = us_cities;
}
