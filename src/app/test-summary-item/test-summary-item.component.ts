import { Component, Input, OnInit } from '@angular/core';

export interface SummaryItem {
  questionTxt: string;
  options: Array<string>;
  selectedOption: string;
  correctOption: string;
  sectionNumber: number;
  questionNumber: number;
}

@Component({
  selector: 'app-test-summary-item',
  templateUrl: './test-summary-item.component.html',
  styleUrls: ['./test-summary-item.component.css']
})
export class TestSummaryItemComponent implements OnInit {

  @Input() item: SummaryItem | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
