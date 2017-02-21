import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the MyPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/my-page/my-page.html',
})
export class MyPagePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
