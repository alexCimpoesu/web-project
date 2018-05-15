import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConcesionariosComponent } from './manage-concesionarios.component';

describe('ManageConcesionariosComponent', () => {
  let component: ManageConcesionariosComponent;
  let fixture: ComponentFixture<ManageConcesionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageConcesionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageConcesionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
