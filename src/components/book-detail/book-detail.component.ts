import { Component, OnInit } from '@angular/core';
import { Book } from './../../app/Book';
import { BookObserverService } from './../../app/book-observer.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  bookObservableService: BookObserverService
  theBook: Book;
  constructor(bookObservableService: BookObserverService) {
    this.bookObservableService = bookObservableService;
    this.theBook = new Book("", 0, "", "");
  }



  ngOnInit(): void {
    this.bookObservableService.currentBook.subscribe(bookvalue => this.theBook = bookvalue);
  }

}
