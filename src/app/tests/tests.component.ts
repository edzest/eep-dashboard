import { Component, OnInit } from '@angular/core';
import { TestInfo } from '../test-info.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() { }

  sampleTestInfo: TestInfo = {
    'testId': 12,
    'testTitle': 'PMP Revision Test',
    'testInstructions': 'Lorem Ipsum ....'
  };

  sampleTestInfo2: TestInfo = {
    'testId': 13,
    'testTitle': 'Test number 2',
    'testInstructions': 'Lorem Ipsum ....'
  }

  allTests: Array<TestInfo> | undefined = [this.sampleTestInfo, this.sampleTestInfo2, this.sampleTestInfo, this.sampleTestInfo2, this.sampleTestInfo];

  ngOnInit(): void {
  }

  takeTest(testId: number) {
    console.log('Calling test id ' + testId);
  }

}
