import { TopicListViewPage } from './../topic-list-view/topic-list-view';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quiz-complete-view',
  templateUrl: 'quiz-complete-view.html',
})
export class QuizCompleteViewPage {

  public dataProvider: any = { correctResponse: 0, incorrectResponse: 0, unattemptedQuestion: 0 };
  public score = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataProvider = navParams.data;
    this.score = this.dataProvider.correctResponse * 4 - this.dataProvider.incorrectResponse;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizCompleteViewPage');
  }

  gotoMainPage() {
    this.navCtrl.push(TopicListViewPage);
  }

}
