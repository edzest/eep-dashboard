import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestInfo } from '../test-info.model';
import { TestStateService } from '../test-state.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor(private testService: TestService, private router: Router,
              private testStateService: TestStateService) { }

  allTests: Array<TestInfo> = [];

  ngOnInit(): void {
    this.testService.getAllTests().subscribe((data: Array<TestInfo>) => this.allTests = data)
  }

  takeTest(testId: number) {
    const currentTestInfo: TestInfo | undefined = this.allTests.find(testInfo => testInfo.id == testId);
    this.testStateService.currentTestInfo = currentTestInfo;
    this.router.navigate(['/test', testId]);
  }

}
