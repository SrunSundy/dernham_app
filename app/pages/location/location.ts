import {Component} from '@angular/core';
import {NavController, NavParams, Storage, LocalStorage,ModalController,ViewController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {Http} from '@angular/http';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/location/location.html',
})
export class LocationPage {
  typemodal:any;
  lan:any;
  title_location:any;

  constructor(private typeModal: NavParams, private http: Http,private nav: NavController, private Modal: ModalController,private viewCtrl:ViewController) { 
    this.typemodal = typeModal.get('data');
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
	    if (result == 'en') {
	    	this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
	           this.title_location = data[0].HomePage.title_location;
	    	   
	         });
	    }else{
	    	this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
	    		this.title_location = data[0].HomePage.title_location;
	         });
	    }
	});
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
 
}
