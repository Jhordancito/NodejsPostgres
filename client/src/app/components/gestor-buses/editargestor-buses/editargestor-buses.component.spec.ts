import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditargestorBusesComponent } from './editargestor-buses.component';

describe('EditargestorBusesComponent', () => {
  let component: EditargestorBusesComponent;
  let fixture: ComponentFixture<EditargestorBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditargestorBusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditargestorBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
