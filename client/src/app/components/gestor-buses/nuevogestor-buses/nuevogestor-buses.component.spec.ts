import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevogestorBusesComponent } from './nuevogestor-buses.component';

describe('NuevogestorBusesComponent', () => {
  let component: NuevogestorBusesComponent;
  let fixture: ComponentFixture<NuevogestorBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevogestorBusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevogestorBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
