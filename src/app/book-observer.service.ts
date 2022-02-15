import { BehaviorSubject } from 'rxjs';
import { Book } from './Book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookObserverService {
  mockBook = new Book("", 1, "0", "");
  bookSubject=new BehaviorSubject<Book>(this.mockBook);
  currentBook=this.bookSubject.asObservable();
  constructor() { }

  changeBook(newBook:Book)
  {
    this.bookSubject.next(newBook);
  }

}
