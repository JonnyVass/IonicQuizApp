import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicListViewPage } from './topic-list-view';

@NgModule({
  declarations: [
    TopicListViewPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicListViewPage),
  ],
})
export class TopicListViewPageModule {}
