import { Component, OnInit } from '@angular/core';
import { SummaryItem } from '../test-summary-item/test-summary-item.component';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

  summaryItems: Array<SummaryItem> = [
    {
      questionTxt: "Question 1",
      options: ["option 1", "option 2", "option 3", "option 4"],
      selectedOption: "option 1",
      correctOption: "option 2",
      questionNumber: 1,
      sectionNumber: 1
    }, 
    {
      questionTxt: "Question 2",
      options: ["option 1", "option 2", "option 3", "option 4"],
      selectedOption: "option 2",
      correctOption: "option 2",
      questionNumber: 2,
      sectionNumber: 1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
