import { TestBed } from '@angular/core/testing';

import { BuscadoresService } from './buscadores.service';

describe('BuscadoresService', () => {
  let service: BuscadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
