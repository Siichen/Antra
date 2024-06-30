import { Component, Input } from '@angular/core';
import { Ratings } from '../interfaces/items.interface';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrl: './rating-list.component.scss',
})
export class RatingListComponent {
  @Input() ratings!: Ratings[];
  averageRating!: number;

  calculateAverage(average: number): void {
    this.averageRating = average;
  }
}
