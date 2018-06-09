import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAveriaComponent } from './detalle-averia.component';

describe('DetalleAveriaComponent', () => {
  let component: DetalleAveriaComponent;
  let fixture: ComponentFixture<DetalleAveriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAveriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAveriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
