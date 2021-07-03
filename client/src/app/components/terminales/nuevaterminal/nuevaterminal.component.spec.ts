import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaterminalComponent } from './nuevaterminal.component';

describe('NuevaterminalComponent', () => {
  let component: NuevaterminalComponent;
  let fixture: ComponentFixture<NuevaterminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaterminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
