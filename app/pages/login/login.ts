import {Component,Inject} from '@angular/core';
import {App,LoadingController,Platform,NavController, NavParams, Storage, LocalStorage,AlertController} from 'ionic-angular';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';
import {SignUpPage} from '../sign-up/sign-up';
import {HomePage} from '../home/home';
import {NewFeedPage} from '../new-feed/new-feed';
import {MainTabsPage} from '../main-tabs/main-tabs';
import {NgClass} from '@angular/common';
import {Http, Headers, RequestOptions} from '@angular/http';

import {APP_CONFIG, AppConfig} from '../../config/app-config';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  private baseUrl: any;
  private apiKey: any;

  public email: string = "";
  public password: string = "";
  //
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
  //result data when get from login success
  user_data:any;

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
  constructor(private app:App,public loadingCtrl: LoadingController,public alertCtrl: AlertController,private http: Http,@Inject(APP_CONFIG) config:AppConfig,private nav: NavController, private param: NavParams, platform: Platform) { 
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;
  }
  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage,{
        title : this.title
    })
  }

  signUp() {
    this.nav.push(SignUpPage);
  }

  login(){
   // this.nav.push(MainTabsPage);
    
    if(!this.email || !this.password ) {
      let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: "Email Or Password can not be blank!",
            buttons: ['OK']
      });
      alert.present();
      return;
    }

     let loadingprocess = this.loadingCtrl.create({ content: ''});
     loadingprocess.present();
    this.user_data = new Storage(LocalStorage);
          //request data
    let body = JSON.stringify({
      "request_data" : {
        "email" : this.email,
        "password" : this.password
      }
    });
    let headers = new Headers();
        headers.append('X-API-KEY', this.apiKey);
        headers.append('Content-Type', 'application/json');
    this.http.post(this.baseUrl+'/UserRestController/loginuser',body,{headers : headers})
      .map(res => res.json())
      .subscribe(data => {

        this.user_data.set('user', data);
        if(data.response_code == "200"){
          this.user_data.set('user', JSON.stringify(data.response_data));
          loadingprocess.dismiss();
          this.nav.push(MainTabsPage);
          
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: data.response_msg,
            buttons: ['OK']
          });
 
          loadingprocess.dismiss().then(()=>{
            alert.present();
          });
        }
        
      },err => {
        let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: JSON.stringify(err),
            buttons: ['OK']
          });

          loadingprocess.dismiss().then(()=>{
            alert.present();
          });
      }); 
  }


}
