import { TestBed } from '@angular/core/testing';

import { AuthorRegistryService } from './author-registry.service';

describe('AuthorRegistryService', () => {
  let service: AuthorRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
