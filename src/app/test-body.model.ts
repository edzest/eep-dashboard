/**
 * TestBody interface represents the response body of getTest API
 */
export interface TestBody {
    testId: number;
    title: string;
    instructions: string;
    sections: Array<Section>;
}

export interface Section {
    sectionId: number;
    sectionName: string;
    questions: Array<Question>;
}

export interface Question {
    questionId: number;
    questionTxt: string;
    options: Array<String>;
}


/**
 * QuestionSet interface represents a Question and its related properties. It'll mainly be used to display the
 * current question of the test
 */
export interface QuestionSet {
    questionTxt: string;
    options: Array<String>;
    questionNumber: number;
    sectionNumber: number;
    selectedOption?: string;
}