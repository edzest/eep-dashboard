import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { McqQuestion } from '../question-types';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


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
  editExplanation: boolean = false;
  addExplanation: string = "Add explanation";
  hideExplanation: string = "Hide explanation";

  explanationMenuTxt!: string;


  questionTags: string[] = ["agile", "planning"];

  ngOnInit(): void {
    if (this.editExplanation) {
      this.explanationMenuTxt = this.hideExplanation;
    } else {
      this.explanationMenuTxt = this.addExplanation;
    }
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


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const tag = (event.value || '').trim();

    if (tag) {
      this.questionTags.push(tag);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    const index = this.questionTags.indexOf(tag);

    if (index >= 0) {
      this.questionTags.splice(index, 1);
    }
  }

  toggleExplanation() {
    this.editExplanation = !this.editExplanation;
    if (this.editExplanation) {
      this.explanationMenuTxt = this.hideExplanation;
    } else {
      this.explanationMenuTxt = this.addExplanation;
    }
  }

}
