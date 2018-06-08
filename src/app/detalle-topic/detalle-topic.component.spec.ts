import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTopicComponent } from './detalle-topic.component';

describe('DetalleTopicComponent', () => {
  let component: DetalleTopicComponent;
  let fixture: ComponentFixture<DetalleTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
