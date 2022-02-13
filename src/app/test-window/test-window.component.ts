import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { TestInfo } from '../test-info.model';

@Component({
  selector: 'app-test-window',
  templateUrl: './test-window.component.html',
  styleUrls: ['./test-window.component.css']
})
export class TestWindowComponent implements OnInit {

  testInfo: TestInfo = {
    'title': 'PMP Revision Test',
    'instructions': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quidem temporibus ab. Accusantium voluptates quo dolor assumenda amet cum,\
    non ad eum ipsa eos! Labore porro inventore similique veritatis aliquid!",
    'testId': 12
  }

  constructor(public testDialog: MatDialog) { }

  ngOnInit(): void {
    this.openTestDialog();
  }

  openTestDialog() {
    const dialogRef = this.testDialog.open(TestDialogComponent, {
      data: this.testInfo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }

}
