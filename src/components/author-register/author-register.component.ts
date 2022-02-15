import { BookObserverService } from './../../app/book-observer.service';
import { Book } from './../../app/Book';
import { Author } from './../../app/Author';

import { AuthorRegistryService } from '../../app/author-registry.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-author-register',
  templateUrl: './author-register.component.html',
  styleUrls: ['./author-register.component.scss']
})
export class AuthorRegisterComponent implements OnInit {
  title = "Authors";
  authors: Author[];
  books: Book[];
  authorMap: Map<number,Author>;
  bookMap: Map<number,Book[]>;
  bookObserverService:BookObserverService;


  constructor(private authorRegistry: AuthorRegistryService, bookObserverService:BookObserverService) {

    this.authors = authorRegistry.getAuthors();
    this.books = authorRegistry.getBooks();
    this.authorMap=new Map<number,Author>();
    this.bookMap=new Map<number,Book[]>();
    this.organiseToMap();
    this.bookObserverService=bookObserverService;

  }

  organiseToMap() {
    for (let i = 0; i < this.authors.length; i++) {
      this.authorMap.set(this.authors[i].id, this.authors[i]);

    }

    for(let j=0;j<this.books.length;j++)
    {
     
      if(!this.bookMap.has(this.books[j].authorId))
      {
         var booklist:Book[]=[];
         this.bookMap.set(this.books[j].authorId,booklist);
      }
      this.bookMap.get(this.books[j].authorId)?.push(this.books[j]);
    }

  }

changeBook(book:Book)
{
  this.bookObserverService.changeBook(book);
}
  ngOnInit(): void {

  }

}

