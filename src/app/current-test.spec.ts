import { CurrentTest } from './current-test';
import { QuestionSet, TestBody } from './test-body.model';

fdescribe('CurrentTest', () => {
  var sampleTestBody: TestBody;
  var sampleQuestionSet: Array<QuestionSet>;
  var currentTest: CurrentTest;

  beforeEach(() => {
    sampleTestBody = {
      testId: 12,
      title: "PMP Revision Test",
      instructions: "lorem ipsum .... ",
      sections: [
        {
          sectionId: 1,
          sectionName: "Section 1",
          questions: [
            {
              questionId: 1,
              questionTxt: "Question 11",
              options: [
                "option 1",
                "option 2",
                "option 3",
                "option 4"
              ]
            },
            {
              questionId: 2,
              questionTxt: "Question 12",
              options: [
                "option 10",
                "option 20",
                "option 30",
                "option 40"
              ]
            }
          ]
        },
        {
          sectionId: 2,
          sectionName: "Section 2",
          questions: [
            {
              questionId: 1,
              questionTxt: "Question 21",
              options: [
                "option 1",
                "option 2",
                "option 3",
                "option 4"
              ]
            },
            {
              questionId: 2,
              questionTxt: "Question 22",
              options: [
                "option 10",
                "option 20",
                "option 30",
                "option 40"
              ]
            }
          ]
        }
      ]
    }
    
    sampleQuestionSet = [
      {
        questionTxt: "Question 11",
        options: [
          "option 1",
          "option 2",
          "option 3",
          "option 4"
        ],
        questionNumber: 1,
        sectionNumber: 1,
      },
      {
        questionTxt: "Question 12",
        options: [
          "option 10",
          "option 20",
          "option 30",
          "option 40"
        ],
        questionNumber: 2,
        sectionNumber: 1,
      },
      {
        questionTxt: "Question 21",
        options: [
          "option 1",
          "option 2",
          "option 3",
          "option 4"
        ],
        questionNumber: 1,
        sectionNumber: 2,
      },
      {
        questionTxt: "Question 22",
        options: [
          "option 10",
          "option 20",
          "option 30",
          "option 40"
        ],
        questionNumber: 2,
        sectionNumber: 2
      }
    ];

    currentTest = new CurrentTest(sampleTestBody);
  });

  it('should create an instance', () => {
    expect(new CurrentTest(sampleTestBody)).toBeTruthy();
  });

  it('should create an Array of Question Sets', () => {
    const questionSets: Array<QuestionSet> = currentTest.questionSets;
    expect(questionSets).toEqual(sampleQuestionSet);
  });

  it('should set first question of the testBody as the current question', () => {
    const currentQuestionSet: QuestionSet = currentTest.getCurrentQuestionSet();
    expect(currentQuestionSet.questionNumber).toEqual(1);
    expect(currentQuestionSet.sectionNumber).toEqual(1);
    expect(currentQuestionSet.questionTxt).toEqual("Question 11");
    expect(currentQuestionSet.options).toEqual(["option 1",
    "option 2",
    "option 3",
    "option 4"]);
  });

  describe('next question', () => {
    it('should return next question set', () => {
      const questionSet: QuestionSet = currentTest.getNextQuestionSet();
      expect(questionSet.sectionNumber).toEqual(1);
      expect(questionSet.questionNumber).toEqual(2);
    });

    it('should return undefined when current question is last question', () => {
      let questionSet;
      for (let i = 0; i < 3; i++) {
        questionSet = currentTest.getNextQuestionSet();
      }
      expect(questionSet).not.toBeUndefined();

      questionSet = currentTest.getNextQuestionSet();
      expect(questionSet).toBeUndefined();
    });

    describe('isLastQuestion', () => {
      it('should return false when not last', () => {
        expect(currentTest.isLastQuestion()).toBeFalse();
      });

      it('should return true when last', () => {
        let questionSet;
        for (let i = 0; i < 3; i++) {
          questionSet = currentTest.getNextQuestionSet();
        }
        expect(currentTest.isLastQuestion()).toBeTrue();
      });
    });
  });

  describe('prev question', () => {
    it('should go to prev question', () => {
      let questionSet: QuestionSet = currentTest.getNextQuestionSet();
      expect(questionSet.questionNumber).toEqual(2);
      expect(questionSet.sectionNumber).toEqual(1);

      questionSet = currentTest.getPrevQuestionSet();
      expect(questionSet.questionNumber).toEqual(1);
      expect(questionSet.sectionNumber).toEqual(1);
    });

    it('should return undefined when currently on first question', () => {
      expect(currentTest.getPrevQuestionSet()).toBeUndefined();
    });

    describe('firstQuestion', () => {
      it('should return true when first', () => {
        expect(currentTest.isFirstQuestion()).toBeTrue();
      });

      it('should return false when not first', () => {
        currentTest.getNextQuestionSet();
        expect(currentTest.isFirstQuestion()).toBeFalse();
      });
    });
  });

  describe('option selection', () => {
    it('should set selected option to current question set', () => {
      let currentQuestionSet: QuestionSet = currentTest.getCurrentQuestionSet();
    let selectedAnswer = "option 12";
    expect(currentQuestionSet.selectedOption).toBeUndefined();
    currentTest.setSelectedOption(selectedAnswer);
    currentQuestionSet = currentTest.getCurrentQuestionSet();
    expect(currentQuestionSet.selectedOption).toEqual(selectedAnswer);
    });
  });
});
