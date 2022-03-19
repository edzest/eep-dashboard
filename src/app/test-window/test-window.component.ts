import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { CurrentTest } from '../current-test';
import { TestQuestion, TestResultRequest, TestResultResponse } from '../test-body.model';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { TestInfo } from '../test-info.model';
import { TestStateService } from '../test-state.service';
import { TestTransformerService } from '../test-transformer.service';
import { TestService } from '../test.service';
import { Timer } from './timer';

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
  
  // timers
  minutes_str: string | undefined;
  seconds_str: string | undefined;

  duration: number | undefined;
  timer: Timer | undefined; 

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
    let currentSection = this.currentQuestion.sectionId;

    if (currentSection && this.testInfo?.timings) {
      this.duration = this.testInfo.timings.sectionTimings[currentSection];
      if (this.duration) {
        this.timer = new Timer(this.duration);
        this.timer.startTimer().subscribe({ 
          next: (duration: number) => this.formatTime(Math.floor(duration / 60), duration % 60), 
          complete: () => this.submit()
        });
      }
    } 
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

  formatTime(minutes: number, seconds: number): void {
    if (minutes < 10) {
      this.minutes_str = "0" + minutes;
    } else {
      this.minutes_str = "" + minutes;
    }
    
    if (seconds < 10) {
      this.seconds_str = "0" + seconds;
    } else {
      this.seconds_str = "" + seconds;
    }
  }
}
