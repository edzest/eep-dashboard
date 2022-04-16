import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { McqQuestion } from '../question-types';

@Component({
  selector: 'app-question-display',
  templateUrl: './question-display.component.html',
  styleUrls: ['./question-display.component.css']
})
export class QuestionDisplayComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() question!: McqQuestion;
  @Input() qIndex!: number;
  @Input() currentlyEditingQIdx: number | undefined | null;

  @Output() deleteQuestion: EventEmitter<number> = new EventEmitter();
  @Output() duplicateQuestion: EventEmitter<number> = new EventEmitter();
  @Output() containerClicked: EventEmitter<number> = new EventEmitter();


  editMode: boolean = false;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changed values`);
    console.log(changes);
    this.editMode = this.currentlyEditingQIdx == this.qIndex;
  }

  onDuplicateQuestion(qIndex: number) {
    this.duplicateQuestion.emit(qIndex);
  }

  onDeleteQuestion(qIndex: number) {
    this.deleteQuestion.emit(qIndex);
  }

  onContainerClick() {
    console.log('Emitting container clicked');
    if (!this.editMode) {
      console.log('Emitting qIndex');
      this.editMode = true;
      this.containerClicked.emit(this.qIndex);
    }
  }

}
