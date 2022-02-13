import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-test-window',
  templateUrl: './test-window.component.html',
  styleUrls: ['./test-window.component.css']
})
export class TestWindowComponent implements OnInit {

  constructor(public testDialog: MatDialog) { }

  ngOnInit(): void {
    this.openTestDialog();
  }

  openTestDialog() {
    const dialogRef = this.testDialog.open(TestDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }

}
