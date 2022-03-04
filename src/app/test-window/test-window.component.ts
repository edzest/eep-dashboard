import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { scan } from 'rxjs';
import { CurrentTest } from '../current-test';
import { TestQuestion, TestBody, TestResultRequest, TestResultResponse } from '../test-body.model';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { TestInfo } from '../test-info.model';
import { TestStateService } from '../test-state.service';
import { TestTransformerService } from '../test-transformer.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-window',
  templateUrl: './test-window.component.html',
  styleUrls: ['./test-window.component.css'],
})
export class TestWindowComponent implements OnInit {

  testInfo: TestInfo | undefined;
  currentQuestion: TestQuestion | undefined; 
  currentTest: CurrentTest = new CurrentTest(); // initialize an empty test
  totalQuestions: number = 0;
  currentStudentName: string = "";

  currentSelectedOption: string | undefined;

  constructor(public testDialog: MatDialog, private router: Router,
              private testStateService: TestStateService,
              private testService: TestService,
              private testTransformerService: TestTransformerService) { }

  ngOnInit(): void {
    const currentTestInfo: TestInfo | undefined = this.testStateService.currentTestInfo;
    if (currentTestInfo == undefined) {
      // todo: fetch test data from backend service
      this.testInfo = {
        id: 12,
        title: 'Sample Test Name',
        instructions: 'sample test info...'
      }
    } else {
      this.testInfo = currentTestInfo;
    }
    this.openTestDialog();
    this.testService.getTestById(this.testInfo.id).subscribe((testBody) => {
      // todo: can I inject this using ng's DI??
      this.currentTest = new CurrentTest(testBody);
      this.totalQuestions = testBody.questions.length;
      console.log('loaded current test body');
    });
  }

  openTestDialog() {
    const dialogRef = this.testDialog.open(TestDialogComponent, {
      data: this.testInfo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined || result === false) {
        this.router.navigate(['/home']);
      } else {
        console.log(`Dialog closed: ${result}`);
        this.currentStudentName = result;
        this.initializeTest();
      }
    });
  }

  initializeTest() {
    this.currentQuestion = this.currentTest?.getCurrentQuestion();
  }

  onOptionSelect(event: MatRadioChange) {
    console.log(event.value);
    this.currentTest?.setSelectedOption(event.value);
  }


  next() {
    this.currentQuestion = this.currentTest?.getNextQuestion();
  }

  previous() {
    this.currentQuestion = this.currentTest?.getPrevQuestion();
  }

  submit() {
    console.log("Submit Test");
    const testResultRequest: TestResultRequest = this.testTransformerService.transformCurrentTestToTestResultRequest(this.currentTest);
    testResultRequest.studentName = this.currentStudentName;
    this.testService.evaluateResult(testResultRequest).subscribe((testResultResponse: TestResultResponse) => {
      this.testStateService.currentTestResult = testResultResponse;
      this.router.navigate(['/result']);
    });
  }
}
