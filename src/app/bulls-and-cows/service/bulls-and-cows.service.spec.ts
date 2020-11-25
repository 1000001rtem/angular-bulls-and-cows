import {TestBed} from '@angular/core/testing';

import {BullsAndCowsService} from './bulls-and-cows.service';

describe('BullsAndCowsService', () => {
  let service: BullsAndCowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BullsAndCowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
