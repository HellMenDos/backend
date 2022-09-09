import { Injectable } from "@nestjs/common";
import { QuestionsDto } from './questions.dto';

@Injectable()
export  class QuestionsServices {
    private questions: QuestionsDto[] = [
        {
            title:"title 2",
            describe:"describe 2",
            photo: "111111",
            user: "hello@gmail.com"
        }
    ]

    constructor() {}

    public getAll() {
        return this.questions
    }


    public find(title: string, user: string) {
        return this.questions.filter((item) => item.title.includes(title) && item.user == user)
    }

    public push(question: QuestionsDto) {
        return this.questions.push(question)
    }
}