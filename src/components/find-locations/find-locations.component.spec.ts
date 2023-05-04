import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLocationsComponent } from './find-locations.component';

describe('FindLocationsComponent', () => {
  let component: FindLocationsComponent;
  let fixture: ComponentFixture<FindLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
