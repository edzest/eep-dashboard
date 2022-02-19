import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-summary-item',
  templateUrl: './test-summary-item.component.html',
  styleUrls: ['./test-summary-item.component.css']
})
export class TestSummaryItemComponent implements OnInit {

  questionTxt: string = "sample question";
  options: Array<String> = ["option 1", "option 2", "option 3", "option 4"];
  selectedOption: string = "option 1";
  correctOption: string = "option 3";
  constructor() { }

  ngOnInit(): void {
  }

}
