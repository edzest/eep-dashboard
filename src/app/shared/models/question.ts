export interface Question {
    questionTxt: string,
    options: string[],
    correctOptions: string[],
    explanation?: string,
    tags?: string
}