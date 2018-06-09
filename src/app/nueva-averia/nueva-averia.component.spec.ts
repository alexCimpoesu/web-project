import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAveriaComponent } from './nueva-averia.component';

describe('NuevaAveriaComponent', () => {
  let component: NuevaAveriaComponent;
  let fixture: ComponentFixture<NuevaAveriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaAveriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaAveriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
