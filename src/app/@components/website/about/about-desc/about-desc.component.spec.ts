import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDescComponent } from './about-desc.component';

describe('AboutDescComponent', () => {
  let component: AboutDescComponent;
  let fixture: ComponentFixture<AboutDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutDescComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
