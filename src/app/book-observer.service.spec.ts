import { TestBed } from '@angular/core/testing';

import { BookObserverService } from './book-observer.service';

describe('BookObserverService', () => {
  let service: BookObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
