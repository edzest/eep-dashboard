import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSummaryItemComponent } from './test-summary-item.component';

describe('TestSummaryItemComponent', () => {
  let component: TestSummaryItemComponent;
  let fixture: ComponentFixture<TestSummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSummaryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
