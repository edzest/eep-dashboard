import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInfoCardComponent } from './test-info-card.component';

describe('TestInfoCardComponent', () => {
  let component: TestInfoCardComponent;
  let fixture: ComponentFixture<TestInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
