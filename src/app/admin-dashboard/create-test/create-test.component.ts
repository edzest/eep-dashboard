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

  currentQIdx: number | undefined | null;

  constructor() { }

  ngOnInit(): void {
    if (this.allQuestions.length == 1) {
      this.currentQIdx = 0;
    }
  }


  /**
   * Duplicates the question at 'qIndex' and inserts it below the current question
   * @param qIndex Question index
   */
  duplicateQuestion(qIndex: number) {
    const question: McqQuestion = this.allQuestions[qIndex];
    const questionCopy: McqQuestion = JSON.parse(JSON.stringify(question));
    this.allQuestions.splice(qIndex+1, 0, questionCopy);
  }

  /**
   * Removes the question at index 'qIndex' from 'allQuestions'
   * @param qIndex Question index
   */
  deleteQuestion(qIndex: number) {
    this.allQuestions.splice(qIndex, 1);
    this.currentQIdx = null;
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


  onQuestionContainerClick(qIndex: number) {
    this.currentQIdx = qIndex;
  }


  onFileUpload($event: any) {
    const files = $event.srcElement.files;
    if (files !== null && files !== undefined && files.length > 0) {
      // todo: read file and populate allQuestions
      console.log(files);
      if (files && files.length > 0) {
        let file: File = files.item(0);
        console.log(file.name);
        console.log(file.size);
        console.log(file.type);
        let reader: FileReader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
          let csv: string = reader.result as string;
          this.convertCsvStringToJson(csv);
        }
      }
    }
  }

  convertCsvStringToJson(data: string) {
    console.log(data);
  }
}
