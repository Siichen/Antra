import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { BooklistComponent } from './booklist/booklist.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    BooklistComponent,
    WishlistComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
