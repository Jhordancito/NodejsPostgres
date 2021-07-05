import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpasajerosComponent } from './editarpasajeros.component';

describe('EditarpasajerosComponent', () => {
  let component: EditarpasajerosComponent;
  let fixture: ComponentFixture<EditarpasajerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarpasajerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
