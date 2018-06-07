import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizServiceProvider {   

  constructor(public http: HttpClient) {
    console.log('[QuizServiceProvider] constructor()');
  }

  getquestionList(filename) {
    return new Promise(resolve => {
      this.http.get('./assets/data/' + filename +'.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getQuizPaperList() {
    return new Promise(resolve => {
      this.http.get('./assets/data/quizAll.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
