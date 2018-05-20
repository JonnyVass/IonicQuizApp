import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuizServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuizServiceProvider {

  // Selected Question
  public items1 = [{ label: "Fructokinase0", order: 1 }, { label: "Fructokinase1", order: 2 }, { label: "Fructokinase2", order: 3 }, { label: "Fructokinase3", order: 4 }];
  public items2 = [{ label: "q1", order: 1 }, { label: "q2", order: 2 }, { label: "q3", order: 3 }, { label: "q4", order: 4 }];

  // All Questions
  public questionList = [{ correctAns: 1, userAns: -1, question: 'Which of the following enzymes convert glucose into glucose-6-p during glycosis ?', answers: this.items1 }, { correctAns: 1, userAns: -1, question: 'Q2', answers: this.items2 }];

  constructor(public http: HttpClient) {
    console.log('Hello QuizServiceProvider Provider');
  }

  getquestionList() {
    return this.questionList;
  }

  getTitle() {
    return 'Title from server'
  }

}
