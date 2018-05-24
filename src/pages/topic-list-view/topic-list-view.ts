import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { QuizServiceProvider } from "../../providers/quiz-service/quiz-service";

@IonicPage()
@Component({
  selector: 'page-topic-list-view',
  templateUrl: 'topic-list-view.html',
})
export class TopicListViewPage {
  
  public dataProvider: any = { title: 'loading', topics: [] };

  constructor(public navCtrl: NavController, public service: QuizServiceProvider) {
    console.log('[TopicListViewPage] constructor()');
  }

  ionViewDidLoad() {
    console.log('[TopicListViewPage] ionViewDidLoad()');
    this.service.getQuizPaperList()
      .then(data => {      
        this.dataProvider = data;
      });
  }

  itemSelected(vo) {
    console.log('[TopicListViewPage] itemSelected()')
    this.navCtrl.push(HomePage, vo);
  }

}
