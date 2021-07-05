import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoboletoComponent } from './nuevoboleto.component';

describe('NuevoboletoComponent', () => {
  let component: NuevoboletoComponent;
  let fixture: ComponentFixture<NuevoboletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoboletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoboletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
