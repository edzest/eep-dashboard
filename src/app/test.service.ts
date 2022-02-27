import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestBody, TestResultRequest, TestResultResponse } from './test-body.model';
import { TestInfo } from './test-info.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private allTestUrl = this.getBaseUrl() + 'tests';
  private getTestByIdUrl = (testId: number) => this.getBaseUrl() + `tests/${testId}`;
  private testEvalUrl = this.getBaseUrl() + 'test_result'

  constructor(private http: HttpClient) { }

  getAllTests(): Observable<Array<TestInfo>> {
    return this.http.get<Array<TestInfo>>(this.allTestUrl)
  }

  getTestById(testId: number): Observable<TestBody> {
    return this.http.get<TestBody>(this.getTestByIdUrl(testId));
  }

  evaluateResult(testEvalInput: TestResultRequest): Observable<TestResultResponse> {
    return this.http.post<TestResultResponse>(this.testEvalUrl, testEvalInput);
  }

  private getBaseUrl(): string {
    return environment.apiUrl;
  }
}
