import { QuestionSet, TestBody } from "./test-body.model";

/**
 * Stores the current test properties and provides an API to navigate the questions of the current test and store selected option
 */
export class CurrentTest {
    private testBody: TestBody;
    currentQuestionSetIndex: number = 0;
    questionSets: Array<QuestionSet> = [];

    constructor(testBody: TestBody) {
        this.testBody = testBody;
        this.questionSets = this.getQuestionSetsFromTestBody();
        if (this.questionSets.length == 0) {
            throw Error("Question Sets is empty");
        }
    }

    private getQuestionSetsFromTestBody(): Array<QuestionSet> {
        let questionSets: Array<QuestionSet> = [];
        for (let section of this.testBody.sections) {
            let sectionNumber: number = section.sectionId;
            for (let question of section.questions) {
                let questionNumber: number = question.questionId;
                let questionSet: QuestionSet = {
                    sectionNumber,
                    questionNumber,
                    questionTxt: question.questionTxt,
                    options: question.options
                };
                questionSets.push(questionSet);
            }
        }
        return questionSets;
    }

    getCurrentQuestionSet(): QuestionSet {
        return this.questionSets[this.currentQuestionSetIndex];
    }

    getNextQuestionSet(): QuestionSet {
        this.currentQuestionSetIndex++;
        return this.getCurrentQuestionSet();
    }

    isLastQuestion(): boolean {
        return this.currentQuestionSetIndex == this.questionSets.length - 1; 
    }


    getPrevQuestionSet(): QuestionSet {
        this.currentQuestionSetIndex--;
        return this.getCurrentQuestionSet();
    }

    isFirstQuestion(): boolean {
        return this.currentQuestionSetIndex == 0;
    }

    setSelectedOption(selectedAnswer: string) {
        let currentQuestionSet = this.getCurrentQuestionSet();
        currentQuestionSet.selectedOption = selectedAnswer;
    }
}
