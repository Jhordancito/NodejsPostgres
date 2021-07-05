import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarboletoComponent } from './editarboleto.component';

describe('EditarboletoComponent', () => {
  let component: EditarboletoComponent;
  let fixture: ComponentFixture<EditarboletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarboletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarboletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
