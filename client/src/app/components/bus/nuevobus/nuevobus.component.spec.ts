import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevobusComponent } from './nuevobus.component';

describe('NuevobusComponent', () => {
  let component: NuevobusComponent;
  let fixture: ComponentFixture<NuevobusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevobusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
