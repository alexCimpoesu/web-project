import { TestBed, inject } from '@angular/core/testing';

import { ConcesionarioService } from './concesionario.service';

describe('ConcesionarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConcesionarioService]
    });
  });

  it('should be created', inject([ConcesionarioService], (service: ConcesionarioService) => {
    expect(service).toBeTruthy();
  }));
});
