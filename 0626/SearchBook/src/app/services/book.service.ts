import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResData, Card, Book } from '../interfaces/book.interface';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly apiURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private books$ = new Subject<Card[]>(); // protect our subject
  booklist$ = this.books$.asObservable();

  private wishes$ = new BehaviorSubject<Card[]>([]);
  wishlist$ = this.wishes$.asObservable();

  constructor(private http: HttpClient) {}

  searchBooks(bookName: string): Observable<Card[]> {
    return this.http.get<ResData>(`${this.apiURL}${bookName}`).pipe(
      map(({ items }: ResData): Card[] =>
        items.map(({ volumeInfo }: Book) => ({
          imageLinks: volumeInfo.imageLinks?.thumbnail || '',
          // if get nothing, give an empty string
          name: volumeInfo.title,
          publisher: volumeInfo.publisher,
          publishedDate: volumeInfo.publishedDate,
          description: volumeInfo.description,
        }))
      ),
      tap((cards: Card[]) => {
        this.books$.next(cards);
      })
    );
  }

  manageWishList(book: Card) {
    const arr = [...this.wishes$.value, book];
    this.wishes$.next(arr);
  }
}
