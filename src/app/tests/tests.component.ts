import { Component, OnInit } from '@angular/core';
import { TestInfo } from '../test-info.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor(private testService: TestService) { }

  allTests: Array<TestInfo> | undefined = [];

  ngOnInit(): void {
    this.testService.getAllTests().subscribe((data: Array<TestInfo>) => this.allTests = data)
  }

  takeTest(testId: number) {
    console.log('Calling test id ' + testId);
  }

}
