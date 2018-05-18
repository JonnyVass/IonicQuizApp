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

  public items = [{ label: "Fructokinase0", order: 1 }, { label: "Fructokinase1", order: 2 }, { label: "Fructokinase2", order: 3 }, { label: "Fructokinase3", order: 4 }];
  public selectedQuestion = { correctAns: 1, userAns: -1, questions: this.items };

  constructor(public navCtrl: NavController) {
    console.log('constructor()');
  }
  
  itemSelected(vo) {
    console.log('itemSelected()');

    this.items.forEach(element => {
      if (vo === element) {
        var color = (this.selectedQuestion.correctAns === vo.order) ? 'primary' : 'danger';
        this.updateColor(vo.order, color);
      } else if (this.selectedQuestion.correctAns === element.order) {
        this.updateColor(element.order, 'primary');
      }
    });
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

}
