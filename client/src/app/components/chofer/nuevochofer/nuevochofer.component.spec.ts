import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevochoferComponent } from './nuevochofer.component';

describe('NuevochoferComponent', () => {
  let component: NuevochoferComponent;
  let fixture: ComponentFixture<NuevochoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevochoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevochoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
