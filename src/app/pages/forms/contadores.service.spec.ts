import { TestBed } from '@angular/core/testing';

import { ContadoresService } from './contadores.service';

describe('ContadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContadoresService = TestBed.get(ContadoresService);
    expect(service).toBeTruthy();
  });
});
