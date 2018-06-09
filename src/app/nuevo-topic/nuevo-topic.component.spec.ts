import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTopicComponent } from './nuevo-topic.component';

describe('NuevoTopicComponent', () => {
  let component: NuevoTopicComponent;
  let fixture: ComponentFixture<NuevoTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
