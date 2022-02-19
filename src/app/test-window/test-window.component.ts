import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { scan } from 'rxjs';
import { CurrentTest } from '../current-test';
import { QuestionSet, TestBody } from '../test-body.model';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { TestInfo } from '../test-info.model';
import { TestStateService } from '../test-state.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-window',
  templateUrl: './test-window.component.html',
  styleUrls: ['./test-window.component.css'],
})
export class TestWindowComponent implements OnInit {

  testInfo: TestInfo | undefined;
  currentQuestionSet: QuestionSet | undefined;
  currentTest: CurrentTest | undefined;

  currentSelectedOption: string | undefined;

  constructor(public testDialog: MatDialog, private router: Router,
              private testStateService: TestStateService,
              private testService: TestService) { }

  ngOnInit(): void {
    const currentTestInfo: TestInfo | undefined = this.testStateService.currentTestInfo;
    if (currentTestInfo == undefined) {
      // todo: fetch test data from backend service
      this.testInfo = {
        testId: 12,
        title: 'Sample Test Name',
        instructions: 'sample test info...'
      }
    } else {
      this.testInfo = currentTestInfo;
    }
    this.openTestDialog();
    this.testService.getTestById(this.testInfo.testId).subscribe((testBody) => {
      // todo: can I inject this using ng's DI??
      this.currentTest = new CurrentTest(testBody);
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
        this.initializeTest();
      }
    });
  }

  initializeTest() {
    this.currentQuestionSet = this.currentTest?.getCurrentQuestionSet();
  }

  onOptionSelect(event: MatRadioChange) {
    console.log(event.value);
    this.currentTest?.setSelectedOption(event.value);
  }


  next() {
    this.currentQuestionSet = this.currentTest?.getNextQuestionSet();
  }

  previous() {
    this.currentQuestionSet = this.currentTest?.getPrevQuestionSet();
  }

  submit() {
    console.log("Submit Test");
    console.log(this.currentTest);
  }

}
