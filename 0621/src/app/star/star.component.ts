import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() rating!: number;
  stars: string[] = [];

  ngOnChanges(): void {
    this.stars = [];
    for (let i = 0; i < this.rating; i++) {
      this.stars.push('&#9733;'); // Filled star
    }
    while (this.stars.length < 5) {
      this.stars.push('&#9734;');
    }
  }
}
