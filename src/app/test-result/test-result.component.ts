import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestQuestion, TestResultResponse } from '../test-body.model';
import { TestStateService } from '../test-state.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

  testResultResponse: TestResultResponse | undefined;

  constructor(private testStateService: TestStateService, private router: Router) {
    this.testResultResponse = this.testStateService.currentTestResult;
    if (this.testResultResponse == undefined) {
      console.error("No test result found. Navigating back to home");
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }

}
