import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  placeholder: string = "Enter book's name...";
  bookname = '';
  sbp: Subscription = new Subscription();

  constructor(private bookService: BookService) {}

  onInput(): void {
    if (this.bookname.trim() !== '') {
      this.sbp = this.bookService.searchBooks(this.bookname).subscribe();
    }
  }

  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }
}
