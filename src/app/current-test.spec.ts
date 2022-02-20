import { CurrentTest } from './current-test';
import { TestQuestion, TestBody } from './test-body.model';

fdescribe('CurrentTest', () => {
  var sampleTestBody: TestBody;
  var currentTest: CurrentTest;

  beforeEach(() => {
    sampleTestBody = {
      testId: 12,
      title: "PMP Revision Test",
      instructions: "lorem ipsum .... ",
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
            },
          
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

    currentTest = new CurrentTest(sampleTestBody);
  });

  it('should create an instance', () => {
    expect(new CurrentTest(sampleTestBody)).toBeTruthy();
  });

  it('should set first question of the testBody as the current question', () => {
    const currentQuestion: TestQuestion = currentTest.getCurrentQuestion();
    expect(currentQuestion.questionId).toEqual(1);
    expect(currentQuestion.questionTxt).toEqual("Question 11");
    expect(currentQuestion.options).toEqual(["option 1",
    "option 2",
    "option 3",
    "option 4"]);
  });

  describe('next question', () => {
    it('should return next question set', () => {
      const questionSet: TestQuestion = currentTest.getNextQuestion();
      expect(questionSet.questionId).toEqual(2);
    });

    it('should return undefined when current question is last question', () => {
      let question;
      for (let i = 0; i < 3; i++) {
        question = currentTest.getNextQuestion();
      }
      expect(question).not.toBeUndefined();

      question = currentTest.getNextQuestion();
      expect(question).toBeUndefined();
    });

    describe('isLastQuestion', () => {
      it('should return false when not last', () => {
        expect(currentTest.isLastQuestion()).toBeFalse();
      });

      it('should return true when last', () => {
        let question;
        for (let i = 0; i < 3; i++) {
          question = currentTest.getNextQuestion();
        }
        expect(currentTest.isLastQuestion()).toBeTrue();
      });
    });
  });

  describe('prev question', () => {
    it('should go to prev question', () => {
      let question: TestQuestion = currentTest.getNextQuestion();
      expect(question.questionId).toEqual(2);

      question = currentTest.getPrevQuestion();
      expect(question.questionId).toEqual(1);
    });

    it('should return undefined when currently on first question', () => {
      expect(currentTest.getPrevQuestion()).toBeUndefined();
    });

    describe('firstQuestion', () => {
      it('should return true when first', () => {
        expect(currentTest.isFirstQuestion()).toBeTrue();
      });

      it('should return false when not first', () => {
        currentTest.getNextQuestion();
        expect(currentTest.isFirstQuestion()).toBeFalse();
      });
    });
  });

  describe('option selection', () => {
    it('should set selected option to current question set', () => {
    let currentQuestion: TestQuestion = currentTest.getCurrentQuestion();
    let selectedAnswer = "option 12";
    expect(currentQuestion.selectedOption).toBeUndefined();
    currentTest.setSelectedOption(selectedAnswer);
    currentQuestion = currentTest.getCurrentQuestion();
    expect(currentQuestion.selectedOption).toEqual(selectedAnswer);
    });
  });
});
