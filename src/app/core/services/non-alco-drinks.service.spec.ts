import { TestBed } from '@angular/core/testing';

import { NonAlcoDrinksService } from './non-alco-drinks.service';

describe('NonAlcoDrinksService', () => {
  let service: NonAlcoDrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonAlcoDrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
