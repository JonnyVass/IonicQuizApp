import { TopicListViewPage } from './../topic-list-view/topic-list-view';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quiz-complete-view',
  templateUrl: 'quiz-complete-view.html',
})
export class QuizCompleteViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizCompleteViewPage');
  }

  gotoMainPage() {
    this.navCtrl.push(TopicListViewPage);
  }

}
