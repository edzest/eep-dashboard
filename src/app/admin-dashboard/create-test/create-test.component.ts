import { Component, OnInit } from '@angular/core';
import { McqQuestion, Option } from './question-types';

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
        option: 'New Delhi'
      }],
      correctOptions: ['New Delhi']
    }
  ];

  currentQIdx: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * Duplicates the question at 'qIndex' and inserts it below the current question
   * @param qIndex Question index
   */
  duplicateQuestion(qIndex: number) {
    const question: McqQuestion = this.allQuestions[qIndex];
    const questionCopy: McqQuestion = JSON.parse(JSON.stringify(question));
    this.allQuestions.splice(qIndex+1, 0, questionCopy);
    this.currentQIdx++;
  }

  /**
   * Removes the question at index 'qIndex' from 'allQuestions'
   * @param qIndex Question index
   */
  deleteQuestion(qIndex: number) {
    this.allQuestions.splice(qIndex, 1);
  }

  


  /**
   * Adds a new question to 'allQuestions' array
   */
  addNewQuestion() {
    const question: McqQuestion = {
      question: 'What is the capital of India?',
      options: [
        {
          id: 0,
          option: 'New Delhi'
        },
      ],
      correctOptions: ['New Delhi']
    };

    this.allQuestions.push(question);
    this.currentQIdx = 0;
  }
}
