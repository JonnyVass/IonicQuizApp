import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public btn1 = 'dark';
  public btn2 = 'dark';
  public btn3 = 'dark';
  public btn4 = 'dark';
  public btn5 = 'dark';

  // public resultIcon = "checkmark";

  // Selected Question
  public items1 = [{ label: "Fructokinase0", order: 1 }, { label: "Fructokinase1", order: 2 }, { label: "Fructokinase2", order: 3 }, { label: "Fructokinase3", order: 4 }];
  public selectedQuestion = { correctAns: -1, userAns: -1, question:'loading', answers: [{ label: "loading", order: 1 }] };


  public items2 = [{ label: "q1", order: 1 }, { label: "q2", order: 2 }, { label: "q3", order: 3 }, { label: "q4", order: 4 }];

  // All Questions
  public questionList = [{ correctAns: 1, userAns: -1, question:'Which of the following enzymes convert glucose into glucose-6-p during glycosis ?',  answers: this.items1 }, { correctAns: 1, userAns: -1, question:'Q2', answers: this.items2 }];

  public qCount = 0;

  constructor(public navCtrl: NavController) {
    console.log('constructor()');
    this.selectedQuestion = this.questionList[this.qCount];
  }

  itemSelected(vo) {
    if (this.selectedQuestion.userAns !== -1) {
      console.log("already attenpted.. return")
      console.log("this.selectedQuestion.userAns = " + this.selectedQuestion.userAns);
      return;
    }
    console.log('itemSelected()');

    this.selectedQuestion.answers.forEach(element => {
      if (vo === element) {
        var color = (this.selectedQuestion.correctAns === vo.order) ? 'secondary' : 'danger';
        this.updateColor(vo.order, color);
        this.selectedQuestion.userAns = vo.order;
      } else if (this.selectedQuestion.correctAns === element.order) {
        this.updateColor(element.order, 'secondary');
      }
    });
  }

  gotoNext() {
    if (this.qCount === (this.questionList.length - 1)) {
      console.log('this.qCount = ' + this.qCount + ' this.questionList.length');
      console.log('gotoNext() end of all question. Show result view here');
      alert('Are you sure to complete test?');
      return;
    }

    console.log('gotoNext');
    this.defaultButtonColors();
    this.qCount++;
    this.selectedQuestion = this.questionList[this.qCount];
    this.updateAnsweredQuestionColors();
  }

  gotoPreviuos() {
    if (this.qCount === 0) {
      console.log('gotoPreviuos(). This is begining. Can not do action');
      alert('No Previous question available. Please click next to continue');
      return;
    }
    console.log('gotoPreviuos');
    this.defaultButtonColors();
    this.qCount--;
    this.selectedQuestion = this.questionList[this.qCount];
    this.updateAnsweredQuestionColors();
  }

  updateAnsweredQuestionColors() {
    if (this.selectedQuestion.userAns !== -1) {
      if (this.selectedQuestion.correctAns !== this.selectedQuestion.userAns) {
        this.updateColor(this.selectedQuestion.userAns, 'danger');
        console.log('update user wrong selection');
      }

      this.updateColor(this.selectedQuestion.correctAns, 'secondary');
      console.log('update correct');
    }
  }


  updateColor(index, color) {
    console.log('updateColor(), index = ' + index + " color = " + color)
    switch (index) {
      case 1:
        this.btn1 = color;
        return;
      case 2:
        this.btn2 = color;
        return;
      case 3:
        this.btn3 = color;
        return;
      case 4:
        this.btn4 = color;
        return;
    }
  }

  getColorVar(index) {
    //  console.log('index = ' + index)
    switch (index) {
      case 1:
        return this.btn1;
      case 2:
        return this.btn2;
      case 3:
        return this.btn3;
      case 4:
        return this.btn4;
      case 5:
        return this.btn5;

    }
    return this.btn1;
  }

  defaultButtonColors() {
    this.btn1 = 'dark';
    this.btn2 = 'dark';
    this.btn3 = 'dark';
    this.btn4 = 'dark';
    this.btn5 = 'dark';
  }

}
