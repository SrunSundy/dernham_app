import {Component,Inject} from '@angular/core';
import {NavController, NavParams, Storage, LocalStorage, Slides,AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {MainTabsPage} from '../main-tabs/main-tabs';
import {Http, Headers, RequestOptions} from '@angular/http';

import {APP_CONFIG, AppConfig} from '../../config/app-config';
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

  private baseUrl: any;
  private apiKey: any;


  constructor(public alertCtrl: AlertController,private nav: NavController, private http: Http,@Inject(APP_CONFIG) config:AppConfig) {
    //load base url 
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;

    //check language
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
  signUp(fullname,email,password,repassword){
    if(password != repassword) {
        return false;
    }
      //request data
    let body = JSON.stringify({
      "request_data" : {
        "fullname" : fullname,
        "email" : email,
        "password" : password
      }
    });
    let headers = new Headers();
        headers.append('X-API-KEY', this.apiKey);
        headers.append('Content-Type', 'application/json');
    this.http.post(this.baseUrl+'/UserRestController/registerUser',body,{headers : headers})
      .map(res => res.json())
      .subscribe(data => {

        //promp alert
          let prompt = this.alertCtrl.create({
            title: 'Verify code',
            message: "Please enter the security code sent to : "+email,
            inputs: [
              {
                name: 'title',
                placeholder: 'Security code'
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Ok',
                handler: data => {
                  //request data 
                  alert(data.title);
                  //console.log(data);
                }
              }
            ]
          });
          prompt.present();
      

      },err => {
        alert(JSON.stringify(err));
         //this.presentAlert("Error" ,JSON.stringify(err));
      }); 
  }


}
