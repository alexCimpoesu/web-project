import { TestBed, inject } from '@angular/core/testing';

import { AveriaService } from './averia.service';

describe('AveriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AveriaService]
    });
  });

  it('should be created', inject([AveriaService], (service: AveriaService) => {
    expect(service).toBeTruthy();
  }));
});
