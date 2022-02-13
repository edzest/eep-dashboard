import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(public testDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
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
