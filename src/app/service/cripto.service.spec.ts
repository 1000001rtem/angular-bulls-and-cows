import {TestBed} from '@angular/core/testing';

import {CryptoService} from './crypto.service';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create encrypt', () => {
    expect(service.encrypt('42')).toEqual(service.encrypt('42'));
    expect(service.encrypt(42)).toEqual(service.encrypt(42));
    expect(service.encrypt({value: 42})).toEqual(service.encrypt({value: 42}));
  });
});
