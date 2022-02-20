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
    correctOption?: string;
}


/**
 * Test Evaluation Request Body - contains selected answer for each question
 */
export interface TestResultRequest {
    testId: number;
    studentName: string;
    questions: Array<TestResultRequestQuestion>;
}

export interface TestResultRequestQuestion {
    questionId: number;
    selectedOption: string | undefined;
}


/**
 * Test Evaluation Response Body - contains correct answers
 */
export interface TestResultResponse {
    testId: number;
    studentName: string;
    scores: {
        scored: number,
        outOf: number;
    };
    questions: Array<TestQuestion>;
}