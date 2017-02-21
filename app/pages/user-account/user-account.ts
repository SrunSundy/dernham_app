import {Component} from '@angular/core';
import {NavController,App} from 'ionic-angular';
import {EditUserAccountPage} from '../edit-user-account/edit-user-account';
import {AccountPage} from '../account/account'

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/user-account/user-account.html',
})
export class UserAccountPage {
type: string = "app";
  constructor(private nav: NavController,private app:App) {}
  editProfile(){
  	this.app.getRootNav().push(EditUserAccountPage);
  }
  goToSetting(){
  	this.app.getRootNav().push(AccountPage);
  }
}
