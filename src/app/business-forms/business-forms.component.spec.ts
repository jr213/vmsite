import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFormsComponent } from './business-forms.component';

describe('BusinessFormsComponent', () => {
  let component: BusinessFormsComponent;
  let fixture: ComponentFixture<BusinessFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
