import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/edit-user-account/edit-user-account.html',
})
export class EditUserAccountPage {
type: string = "app";
  constructor(private nav: NavController) {}
}
