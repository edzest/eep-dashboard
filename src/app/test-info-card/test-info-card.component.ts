import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestInfo } from '../test-info.model';

@Component({
  selector: 'app-test-info-card',
  templateUrl: './test-info-card.component.html',
  styleUrls: ['./test-info-card.component.css']
})
export class TestInfoCardComponent implements OnInit {

  @Input() testInfo: TestInfo | undefined;

  @Output() takeTest = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.takeTest.emit(this.testInfo?.testId);
  }

}
