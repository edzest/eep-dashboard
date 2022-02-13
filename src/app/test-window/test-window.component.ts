import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { TestInfo } from '../test-info.model';
import { TestStateService } from '../test-state.service';

@Component({
  selector: 'app-test-window',
  templateUrl: './test-window.component.html',
  styleUrls: ['./test-window.component.css']
})
export class TestWindowComponent implements OnInit {

  testInfo: TestInfo | undefined;

  constructor(public testDialog: MatDialog, private router: Router,
              private testStateService: TestStateService) { }

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
      }
    });
  }

}
