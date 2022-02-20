import { TestBed } from '@angular/core/testing';

import { TestTransformerService } from './test-transformer.service';

describe('TestTransformerService', () => {
  let service: TestTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
