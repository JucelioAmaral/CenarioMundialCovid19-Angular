import { TestBed } from '@angular/core/testing';

import { dadosService } from './dados.service';

describe('dadosService', () => {
  let service: dadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
