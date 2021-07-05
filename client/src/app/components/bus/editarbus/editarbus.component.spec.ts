import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarbusComponent } from './editarbus.component';

describe('EditarbusComponent', () => {
  let component: EditarbusComponent;
  let fixture: ComponentFixture<EditarbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
