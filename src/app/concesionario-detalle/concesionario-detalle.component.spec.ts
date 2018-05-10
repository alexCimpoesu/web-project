import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionarioDetalleComponent } from './concesionario-detalle.component';

describe('ConcesionarioDetalleComponent', () => {
  let component: ConcesionarioDetalleComponent;
  let fixture: ComponentFixture<ConcesionarioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcesionarioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcesionarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
