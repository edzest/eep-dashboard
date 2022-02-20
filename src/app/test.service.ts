import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestBody, TestEvalInput, TestEvalResult } from './test-body.model';
import { TestInfo } from './test-info.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private allTestUrl = 'https://virtserver.swaggerhub.com/e3443/EEP-API/0.0.1/tests';
  private getTestByIdUrl = (testId: number) => `https://virtserver.swaggerhub.com/e3443/EEP-API/0.0.1/tests/${testId}`;
  private testEvalUrl = 'https://virtserver.swaggerhub.com/e3443/EEP-API/0.0.1/test_result'

  constructor(private http: HttpClient) { }

  getAllTests(): Observable<Array<TestInfo>> {
    return this.http.get<Array<TestInfo>>(this.allTestUrl)
  }

  getTestById(testId: number): Observable<TestBody> {
    return this.http.get<TestBody>(this.getTestByIdUrl(testId));
  }

  evaluateResult(testEvalInput: TestEvalInput): Observable<TestEvalResult> {
    return this.http.post<TestEvalResult>(this.testEvalUrl, testEvalInput);
  }
}
