import {Component} from '@angular/core';
import {NavController, NavParams, Storage, LocalStorage, Slides } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {Http} from '@angular/http';
import { ViewChild } from '@angular/core';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/intro/intro.html',
})

export class IntroPage {
  @ViewChild('mySlider') slider: Slides;

  local_language:any;
  local_color:any;
  lan:any;
  lb_language:any;
  head_2slide:any;
  info_2slide:any;
  head_3slide:any;
  info_3slide:any;
  opt_kh:any;
  opt_en:any; 
  button_cancel:any;
  button_ok:any;

  constructor(private nav: NavController, private http: Http, private param: NavParams) { 
    this.local_language = new Storage(LocalStorage);
    this.local_language.set('lan', 'en');
    this.setParams();
  }

  setParams(){
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
           this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
           this.lb_language = data[0].IntroPage.lb_language;
           this.head_2slide = data[0].IntroPage.head_2slide;
           this.head_3slide = data[0].IntroPage.head_3slide;
           this.info_2slide = data[0].IntroPage.info_2slide;
           this.info_3slide = data[0].IntroPage.info_3slide;
           this.opt_kh = data[0].IntroPage.opt_kh;
           this.opt_en = data[0].IntroPage.opt_en;
           this.button_cancel = data[0].IntroPage.button_cancel;
           this.button_ok = data[0].IntroPage.button_ok;
          });  
      }else{
           this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
           this.lb_language = data[0].IntroPage.lb_language;
           this.head_2slide = data[0].IntroPage.head_2slide;
           this.head_3slide = data[0].IntroPage.head_3slide;
           this.info_2slide = data[0].IntroPage.info_2slide;
           this.info_3slide = data[0].IntroPage.info_3slide;
           this.opt_kh = data[0].IntroPage.opt_kh;
           this.opt_en = data[0].IntroPage.opt_en;
           this.button_cancel = data[0].IntroPage.button_cancel;
           this.button_ok = data[0].IntroPage.button_ok;
           });  
      }
    });
  }

  getLanguage(language) {
    this.local_language = new Storage(LocalStorage);
    this.local_language.set('lan', language);
    this.setParams();
  }

  // process login
  start() {
    // add your login code here
    this.nav.push(LoginPage);
  }

  nextSilde(index){
    this.slider.slideTo(index);
  }
 
}
