import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestBody } from './test-body.model';
import { TestInfo } from './test-info.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private allTestUrl = 'https://virtserver.swaggerhub.com/e3443/EEP-API/0.0.1/tests';

  constructor(private http: HttpClient) { }

  sampleTestBody: TestBody = {
    testId: 12,
    title: "PMP Revision Test",
    instructions: "lorem ipsum .... ",
    sections: [
      {
        sectionId: 1,
        sectionName: "Section 1",
        questions: [
          {
            questionId: 1,
            questionTxt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius vero repellendus qui nesciunt! \
            Fuga maxime ex voluptate odit accusamus eveniet aut impedit et voluptatibus, itaque harum praesentium, dolorum similique?",
            options: [
              "option 1",
              "option 2",
              "option 3",
              "option 4"
            ]
          },
          {
            questionId: 2,
            questionTxt: "This a new question with new answers...",
            options: [
              "option 10",
              "option 20",
              "option 30",
              "option 40"
            ]
          }
        ]
      },
      {
        sectionId: 2,
        sectionName: "Section 2",
        questions: [
          {
            questionId: 1,
            questionTxt: "Section 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius vero repellendus qui nesciunt! \
            Fuga maxime ex voluptate odit accusamus eveniet aut impedit et voluptatibus, itaque harum praesentium, dolorum similique?",
            options: [
              "option 1",
              "option 2",
              "option 3",
              "option 4"
            ]
          },
          {
            questionId: 2,
            questionTxt: "Section 2This a new question with new answers...",
            options: [
              "option 10",
              "option 20",
              "option 30",
              "option 40"
            ]
          }
        ]
      }
    ]
  } 

  getAllTests() {
    return this.http.get<Array<TestInfo>>(this.allTestUrl)
  }

  getTestById() {
    return this.sampleTestBody;
  }
}
