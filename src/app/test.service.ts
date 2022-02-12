import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestInfo } from './test-info.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private allTestUrl = 'https://virtserver.swaggerhub.com/e3443/EEP-API/0.0.1/tests';

  constructor(private http: HttpClient) { }



  getAllTests() {
    return this.http.get<Array<TestInfo>>(this.allTestUrl)
  }
}
