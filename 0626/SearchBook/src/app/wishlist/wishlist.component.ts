import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/book.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishlist$!: Observable<Card[]>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.wishlist$ = this.bookService.wishlist$;
  }
}

// 这个是async版本
