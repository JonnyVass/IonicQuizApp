import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopicListViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic-list-view',
  templateUrl: 'topic-list-view.html',
})
export class TopicListViewPage {

  public topics = [{ label: 'Topic 1', file:'questions1' }, { label: 'Topic 2', file:'questions2' }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicListViewPage');
  }

  itemSelected(vo) {
    console.log('[TopicListViewPage] itemSelected()')
    this.navCtrl.push(HomePage, vo);
  }

}
