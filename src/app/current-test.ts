import { TestBody, TestQuestion } from "./test-body.model";

/**
 * Stores the current test properties and provides an API to navigate the questions of the current test and store selected option
 */
export class CurrentTest {
    private testBody: TestBody;
    testId: number;
    currentQuestionIndex: number = 0;

    constructor(testBody: TestBody) {
        this.testBody = testBody;
        this.testId = testBody.testId;
    }

    getCurrentQuestion(): TestQuestion {
        return this.testBody.questions[this.currentQuestionIndex];
    }

    getNextQuestion(): TestQuestion {
        this.currentQuestionIndex++;
        return this.getCurrentQuestion();
    }

    isLastQuestion(): boolean {
        return this.currentQuestionIndex == this.testBody.questions.length - 1; 
    }


    getPrevQuestion(): TestQuestion {
        this.currentQuestionIndex--;
        return this.getCurrentQuestion();
    }

    isFirstQuestion(): boolean {
        return this.currentQuestionIndex == 0;
    }

    setSelectedOption(selectedAnswer: string) {
        let currentQuestion = this.getCurrentQuestion();
        currentQuestion.selectedOption = selectedAnswer;
    }

    getAllQuestions(): Array<TestQuestion> {
        return this.testBody.questions;
    }
}
