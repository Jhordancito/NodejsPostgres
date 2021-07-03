import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarterminalComponent } from './editarterminal.component';

describe('EditarterminalComponent', () => {
  let component: EditarterminalComponent;
  let fixture: ComponentFixture<EditarterminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarterminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
