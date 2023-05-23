import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAppComponent } from './vendor-app.component';

describe('VendorAppComponent', () => {
  let component: VendorAppComponent;
  let fixture: ComponentFixture<VendorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
