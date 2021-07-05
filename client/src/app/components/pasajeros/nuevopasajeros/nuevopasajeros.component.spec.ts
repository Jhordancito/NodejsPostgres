import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevopasajerosComponent } from './nuevopasajeros.component';

describe('NuevopasajerosComponent', () => {
  let component: NuevopasajerosComponent;
  let fixture: ComponentFixture<NuevopasajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevopasajerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevopasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
