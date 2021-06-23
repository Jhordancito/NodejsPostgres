import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorBusesComponent } from './gestor-buses.component';

describe('GestorBusesComponent', () => {
  let component: GestorBusesComponent;
  let fixture: ComponentFixture<GestorBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorBusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
