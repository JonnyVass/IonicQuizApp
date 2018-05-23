import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizCompleteViewPage } from './quiz-complete-view';

@NgModule({
  declarations: [
    QuizCompleteViewPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizCompleteViewPage),
  ],
})
export class QuizCompleteViewPageModule {}
