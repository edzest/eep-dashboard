import { Component, Input, OnInit } from '@angular/core';
import { TestQuestion } from '../test-body.model';

@Component({
  selector: 'app-test-summary-item',
  templateUrl: './test-summary-item.component.html',
  styleUrls: ['./test-summary-item.component.css']
})
export class TestSummaryItemComponent implements OnInit {

  @Input() item: TestQuestion | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
