import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';
import { IndividualRatingComponent } from './individual-rating/individual-rating.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    AverageRatingComponent,
    IndividualRatingComponent,
    RatingListComponent,
    StarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
