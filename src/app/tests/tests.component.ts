import { Component, OnInit } from '@angular/core';
import { TestInfo } from '../test-info.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() { }

  testInfo: TestInfo | undefined = {
    'testId': 12,
    'testTitle': 'PMP Revision Test',
    'testInstructions': 'Lorem Ipsum ....'
  };

  ngOnInit(): void {
  }

  takeTest(testId: number) {
    console.log('Calling test id ' + testId);
  }

}
