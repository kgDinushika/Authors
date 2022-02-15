import { Author } from './Author';
import { Book } from './Book';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorRegistryService {

  private authors: Author[];

  private books: Book[];
  constructor() {
    this.authors =
      [
        new Author(1, "Danielle Steel", "assets\\img\\daniel.PNG"),
        new Author(2, "Paulo Coelho", "assets\\img\\paulo.PNG"),
        new Author(3, "Nicholas Sparks", "assets\\img\\nicholas.PNG")
      ];

        this.books=
        [
          new Book("Right time",1,"ISBN: 1232324335","assets\\img\\right_time.PNG"),
          new Book("One day at a time",1,"ISBN: 4343524335","assets\\img\\oneday.PNG"),
          new Book("A perfect life",1,"ISBN: 65454335","assets\\img\\perfect_life.PNG"),

          new Book("The alchemist",2,"ISBN: 9548535345","assets\\img\\alchemist.PNG"),
          new Book("Spy",2,"ISBN: 94343434555","assets\\img\\spy.PNG"),
          new Book("Alph",2,"ISBN: 9548535345","assets\\img\\alph.PNG"),

          new Book("The last song",3,"ISBN: 8858535345","assets\\img\\lastsong.PNG"),

        ]

  }

  getAuthors() {
    return this.authors;
  }

  getBooks()
  {
    return this.books;
  }
}
