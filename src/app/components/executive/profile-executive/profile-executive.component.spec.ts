import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExecutiveComponent } from './profile-executive.component';

describe('ProfileExecutiveComponent', () => {
  let component: ProfileExecutiveComponent;
  let fixture: ComponentFixture<ProfileExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileExecutiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
