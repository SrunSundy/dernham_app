import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/new-feed/new-feed.html'
})
export class NewFeedPage {
type: string = "app";
  constructor(private nav: NavController) {}
  
  subText(str, cutvalue):string{
    if(str.length > 25){
      return str.substring(0,cutvalue)+" ...";  
    }else{
      return str;
    }    
  }
}
