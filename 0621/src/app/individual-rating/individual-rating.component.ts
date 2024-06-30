import { Component, Input } from '@angular/core';
import { Ratings } from '../interfaces/items.interface';

@Component({
  selector: 'app-individual-rating',
  templateUrl: './individual-rating.component.html',
  styleUrls: ['./individual-rating.component.scss'],
})
export class IndividualRatingComponent {
  @Input() rating!: Ratings;
}
