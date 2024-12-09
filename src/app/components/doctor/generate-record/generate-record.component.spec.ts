import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRecordComponent } from './generate-record.component';

describe('GenerateRecordComponent', () => {
  let component: GenerateRecordComponent;
  let fixture: ComponentFixture<GenerateRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
