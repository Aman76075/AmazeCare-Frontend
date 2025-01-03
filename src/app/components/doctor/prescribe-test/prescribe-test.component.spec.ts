import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribeTestComponent } from './prescribe-test.component';

describe('PrescribeTestComponent', () => {
  let component: PrescribeTestComponent;
  let fixture: ComponentFixture<PrescribeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescribeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescribeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
