import {Component} from '@angular/core';
import {Platform,NavController, NavParams, Storage, LocalStorage} from 'ionic-angular';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';
import {SignUpPage} from '../sign-up/sign-up';
import {HomePage} from '../home/home';
import {MainTabsPage} from '../main-tabs/main-tabs';
import {Http} from '@angular/http';
import {NgClass} from '@angular/common';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  facebook:any;
  pl_username:any;
  pl_password:any;
  submit:any;
  forgotpassword:any;
  languages:any;
  lan:any;
  theme:any;
  lb_or:any;
  title:any;
  button_register:any;

  ionViewLoaded(){
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
           this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
           this.facebook = data[0].LoginPage.facebook;
           this.pl_username = data[0].LoginPage.pl_username;
           this.pl_password = data[0].LoginPage.pl_password;
           this.lb_or=data[0].LoginPage.lb_or;
           this.button_register=data[0].LoginPage.button_register;
           this.title=data[0].LoginPage.title;
           this.submit = data[0].LoginPage.submit;
           this.forgotpassword = data[0].LoginPage.forgotPassword; 

          });  
      } else {
           this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
           this.facebook = data[0].LoginPage.facebook;
           this.pl_username = data[0].LoginPage.pl_username;
           this.pl_password = data[0].LoginPage.pl_password;
           this.lb_or = data[0].LoginPage.lb_or;
           this.button_register = data[0].LoginPage.button_register;
           this.title=data[0].LoginPage.title;
           this.submit = data[0].LoginPage.submit;
           this.forgotpassword = data[0].LoginPage.forgotPassword;         
          });  
      }
    });
  }
  constructor(private nav: NavController, private http: Http, private param: NavParams, platform: Platform) { 
    
  }
  getValue(language) {
    alert(language);
  }
  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage,{
        title : this.title
    })
  }

  // process login
  login() {
    // add your login code here
    this.nav.push(MainTabsPage);
  }

  // go to sign up page
  signUp() {
    // add our sign up code here
    this.nav.push(SignUpPage);
  }
}
