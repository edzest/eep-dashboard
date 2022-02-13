import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {

  studentName: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
