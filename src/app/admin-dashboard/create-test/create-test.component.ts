import { Component, OnInit } from '@angular/core';

// Type to store question and its answers
interface McqQuestion {
  question: string,
  options: Option[]
}

interface Option {
  id: number,
  option: string
}

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  allQuestions: McqQuestion[] = [
    {
      'question': 'Ex: What is the capital of India...',
      'options': [{
        id: 0,
        option: ''
      }]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Adds a new option to the currently editing question. 
   * This function creates a new option id by incrementing the last option id. Option id is required
   * to use the custom tracking function optionsTrackFn.
   * @param qIndex Question index
   */
  onClickAddOption(qIndex: number) {
    const optionsLength = this.allQuestions[qIndex].options.length;
    const lastId = this.allQuestions[qIndex].options[optionsLength-1].id;

    const newOption: Option = {
      id: lastId + 1,
      option: ''
    }

    const options = this.allQuestions[qIndex].options;
    options.push(newOption); 
  }

  /**
   * Removes the given option from the currently editing question
   * @param qIndex Question index
   * @param index option index
   */
  removeOption(qIndex: number, index: number) {
    const options = this.allQuestions[qIndex].options;
    options.splice(index, 1);
  } 

  duplicateQuestion() {

  }

  deleteQuestion() {

  }

  /**
   * Custom tracking function for options ngFor
   * This is required so that the input focus is not lost when ngModel is updated
   * @param index ngFor index - not required, only for matching syntax
   * @param option Current Option
   * @returns option id
   */
  optionsTrackFn(index: number, option: Option) {
    return option.id;
  } 



}
