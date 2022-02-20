import { Injectable } from '@angular/core';
import { TestQuestion } from './test-body.model';
import { TestInfo } from './test-info.model';

@Injectable({
  providedIn: 'root'
})
export class TestStateService {

  // this service is used to store the state of the current test
  // this can be replaced with sophisticated state management services as the app complexity grows 
  public currentTestInfo: TestInfo | undefined;

  public currentQuestionSet: TestQuestion | undefined;
  
  constructor() { }
}
