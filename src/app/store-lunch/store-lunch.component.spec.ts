import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLunchComponent } from './store-lunch.component';

describe('StoreLunchComponent', () => {
  let component: StoreLunchComponent;
  let fixture: ComponentFixture<StoreLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreLunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
