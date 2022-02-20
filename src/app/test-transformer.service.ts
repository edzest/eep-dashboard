import { Injectable } from '@angular/core';
import { CurrentTest } from './current-test';
import { TestEvalInput } from './test-body.model';

/**
 * Utility to transform entities into API request and responses
 */
@Injectable({
  providedIn: 'root'
})
export class TestTransformerService {

  constructor() { }

  transformCurrentTestToTestEvalInput(currentTest: CurrentTest): TestEvalInput | null {
    return null;
  }


}
