import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SearchBook';
}

// input box 要用this.dataservice.getAll(val).subscribe()

// data service用 books$ = new Subject();
// getAllJSDocTags(bookname) {
//   this.http.get(url+bookname).pipe(
//     pluk('items'),
//     map(itemArr => itemArr.map(ite=>({
//       bookname: itemArr.volumninfo.title,
//       ...
//       ...
//     })))
//     tap(myArr => {
//       this.books$.nect(myArr);
//     })
//   )
// }

// 然后这个book list盒子要用：
// books = [];
// ngOnInit(){
//   this.dataservice.books$.subscribe(data => {
//     this.books = data;
//   })
// }

// ul *ngFor="let book of books"
// {{book.bookname}}
