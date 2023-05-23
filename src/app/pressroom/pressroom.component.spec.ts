import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressroomComponent } from './pressroom.component';

describe('PressroomComponent', () => {
  let component: PressroomComponent;
  let fixture: ComponentFixture<PressroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
