import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenRegComponent } from './gen-reg.component';

describe('GenRegComponent', () => {
  let component: GenRegComponent;
  let fixture: ComponentFixture<GenRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
