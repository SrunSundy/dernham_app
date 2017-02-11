import {Component} from '@angular/core';
import {NavController, NavParams, Storage, LocalStorage, Slides } from 'ionic-angular';
import {HomePage} from '../home/home';
import {Http} from '@angular/http';
import {MainTabsPage} from '../main-tabs/main-tabs';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/sign-up/sign-up.html',
})
export class SignUpPage {

  lan:any;
  title:any;
  pl_name:any;
  pl_email:any;
  pl_pwd:any;
  pl_repwd:any;
  button_signup:any;

  constructor(private nav: NavController, private http: Http) {
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
           this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
           this.title = data[0].SignupPage.title;
           this.pl_name = data[0].SignupPage.pl_name;
           this.pl_email = data[0].SignupPage.pl_email;
           this.pl_pwd = data[0].SignupPage.pl_pwd;
           this.pl_repwd = data[0].SignupPage.pl_repwd;
           this.button_signup = data[0].SignupPage.button_signup;

          });  
      }else{
           this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
           this.title = data[0].SignupPage.title;
           this.pl_name = data[0].SignupPage.pl_name;
           this.pl_email = data[0].SignupPage.pl_email;
           this.pl_pwd = data[0].SignupPage.pl_pwd;
           this.pl_repwd = data[0].SignupPage.pl_repwd;
           this.button_signup = data[0].SignupPage.button_signup;
           });  
      }
    });

  }


  // process sign up
  signUp() {
    // add our sign up code here
    this.nav.push(MainTabsPage);
  }
}
