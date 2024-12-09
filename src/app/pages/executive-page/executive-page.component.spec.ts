import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivePageComponent } from './executive-page.component';

describe('ExecutivePageComponent', () => {
  let component: ExecutivePageComponent;
  let fixture: ComponentFixture<ExecutivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutivePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
