import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Card } from '../interfaces/book.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit, OnDestroy {
  booklist: Card[] = [];
  sbp = new Subscription();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.sbp = this.bookService.booklist$.subscribe((data: Card[]) => {
      this.booklist = data;
    });
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }
  onClick(book: Card) {
    this.bookService.manageWishList(book);
  }
}
