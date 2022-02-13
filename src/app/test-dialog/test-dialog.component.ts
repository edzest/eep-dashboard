import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestInfo } from '../test-info.model';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {

  studentName: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: TestInfo) { }

  ngOnInit(): void {
  }

}
