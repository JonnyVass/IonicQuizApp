import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizViewPage } from './quiz-view';

@NgModule({
  declarations: [
    QuizViewPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizViewPage),
  ],
})
export class QuizViewPageModule {}
