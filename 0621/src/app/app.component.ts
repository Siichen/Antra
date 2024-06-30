import { Component } from '@angular/core';
import { Ratings } from './interfaces/items.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tesla';

  ratings: Ratings[] = [
    {
      name: 'Keisha Holmes',
      content:
        'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      rate: 4.0,
    },
    {
      name: 'Allison Ratliff',
      content:
        'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      rate: 3.8,
    },
    {
      name: 'Chen Si',
      content:
        'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
      rate: 4.5,
    },
    {
      name: 'Rachel Ross',
      content:
        'ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
      rate: 3.4,
    },
  ];
}
