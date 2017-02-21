import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {NavController, NavParams, Storage, LocalStorage} from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/forgot-password/forgot-password.html',
})
export class ForgotPasswordPage {
  lan:any;
  title_forgetpwd:any;
  pl_enter_email:any;
  button_search:any;

  constructor(private nav: NavController, private param: NavParams, private http: Http) {
  	this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
           this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
           this.title_forgetpwd = data[0].ForgetPwdPage.title_forgetpwd;
           this.pl_enter_email = data[0].ForgetPwdPage.pl_enter_email;
           this.button_search = data[0].ForgetPwdPage.button_search;
          });  
      }else{
           this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
           this.title_forgetpwd = data[0].ForgetPwdPage.title_forgetpwd;
           this.pl_enter_email = data[0].ForgetPwdPage.pl_enter_email;
           this.button_search = data[0].ForgetPwdPage.button_search;
           });  
      }
    });

  }
}
