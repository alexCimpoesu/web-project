import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoConcesionarioComponent } from './nuevo-concesionario.component';

describe('NuevoConcesionarioComponent', () => {
  let component: NuevoConcesionarioComponent;
  let fixture: ComponentFixture<NuevoConcesionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoConcesionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
