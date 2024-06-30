import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.scss'],
})
export class AverageRatingComponent implements OnInit {
  @Input() ratings!: any[];
  @Output() averageRate = new EventEmitter<number>();
  average!: number;

  ngOnInit(): void {
    this.calculateAverage();
  }

  calculateAverage(): void {
    if (this.ratings && this.ratings.length > 0) {
      const sum = this.ratings.reduce((acc, rating) => acc + rating.value, 0);
      this.average = sum / this.ratings.length;
    } else {
      this.average = 0;
    }
    this.averageRate.emit(this.average);
  }
}
