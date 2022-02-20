import { Injectable } from '@angular/core';
import { CurrentTest } from './current-test';
import { TestQuestion, TestResultRequest, TestResultRequestQuestion } from './test-body.model';

/**
 * Utility to transform entities into API request and responses
 */
@Injectable({
  providedIn: 'root'
})
export class TestTransformerService {

  constructor() { }

  transformCurrentTestToTestResultRequest(currentTest: CurrentTest): TestResultRequest {
    const testId: number = currentTest.testId;
    const studentName: string = "MS Dhoni"; // todo: change this hardcoded name
    const questions: Array<TestResultRequestQuestion> = currentTest.getAllQuestions().map((testQuestion: TestQuestion) => {
      return {
        questionId: testQuestion.questionId,
        selectedOption: testQuestion.selectedOption
      };
    });
    return {
      testId,
      studentName,
      questions
    };
  }


}
