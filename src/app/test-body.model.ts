/**
 * TestBody interface represents the response body of getTest API
 */
export interface TestBody {
    testId: number;
    title: string;
    instructions: string;
    questions: Array<TestQuestion>;
}

export interface TestQuestion {
    questionId: number;
    questionTxt: string;
    options: Array<String>;
    selectedOption?: string;
}


/**
 * Test Evaluation Request Body - contains selected answer for each question
 */
export interface TestEvalInput {
    testId: number;
    studentName: string;
    sections: Array<TestEvalInputSection>;
}

export interface TestEvalInputSection {
    sectionId: number;
    questions: Array<TestEvalInputQuestion>;
}

export interface TestEvalInputQuestion {
    questionId: number;
    selectedOption: string;
}


/**
 * Test Evaluation Response Body - contains correct answers
 */
export interface TestEvalResult {
    testId: number;
    studentName: string;
    scores: {
        scored: number,
        outOf: number;
    },
    sections: [
        {
            sectionId: number,
            questions: {
                questionId: number,
                questionTxt: string,
                options: Array<String>,
                selectedOption: string,
                correctOption: string
            }
        }
    ]
}