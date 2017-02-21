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
  templateUrl: 'build/pages/latest/latest.html',
  styleUrls: ['css/latest.css' ]
})
export class LatestPage {
  typemodal:any;
  head_latest:any;
  button_nearby:any;
  button_ecoupon:any;
  button_topshop:any;
  button_topmember:any;
  button_event:any;
  button_game:any;
  title_food:any;
  lan:any;
  selectedType: any = 0;

  page_item: any = [];
  constructor(private typeModal: NavParams,private nav: NavController, private http: Http, private Modal: ModalController,private viewCtrl:ViewController) { 
    
    
    this.typemodal = typeModal.get('data');
    let selectedSort = typeModal.get('selectedSort');
    this.selectedType = selectedSort.selectedType;
    
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
	    if (result == 'en') {
	    	this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
	          // this.title_food = data[0].HomePage.title_food;
	           this.head_latest = data[0].HomePage.head_latest;
	    	   this.button_nearby = data[0].HomePage.button_nearby; 
	          //  this.button_ecoupon = data[0].HomePage.button_ecoupon;
	           this.button_topshop = data[0].HomePage.button_topshop;     
	          // this.button_topmember = data[0].HomePage.button_topmember;   
	          // this.button_event = data[0].HomePage.button_event; 
	          // this.button_game = data[0].HomePage.button_game;
            this.page_item = [{
             'item_no' : 0,
             'item_name' : this.head_latest ,
             'item_icon' : 'md-time',
             'item_color': '#29bf12'
            },{
             'item_no' : 1,
             'item_name' : this.button_nearby ,
             'item_icon' : 'md-pin',
             'item_color': '#507dbc'
            },{
             'item_no' : 2,
             'item_name' : this.button_topshop ,
             'item_icon' : 'md-restaurant',
             'item_color': '#f21b3f'
            }];

	         });
	    }else{
	    	this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
	    	   //this.title_food = data[0].HomePage.title_food;
	    	    this.head_latest = data[0].HomePage.head_latest;
	    	    this.button_nearby = data[0].HomePage.button_nearby; 
	          // this.button_ecoupon = data[0].HomePage.button_ecoupon;
	          this.button_topshop = data[0].HomePage.button_topshop;     
	          // this.button_topmember = data[0].HomePage.button_topmember;   
	          // this.button_event = data[0].HomePage.button_event; 
	          // this.button_game = data[0].HomePage.button_game;
            this.page_item = [{
             'item_no' : 0,
             'item_name' : this.head_latest ,
             'item_icon' : 'md-time',
             'item_color': '#29bf12'
            },{
             'item_no' : 1,
             'item_name' : this.button_nearby ,
             'item_icon' : 'md-pin',
             'item_color': '#507dbc'
            },{
             'item_no' : 2,
             'item_name' : this.button_topshop ,
             'item_icon' : 'md-restaurant',
             'item_color': '#f21b3f'
            }];
	      });
	    }

      
	});

  }

  sortedList( type, name ){
  	let sort = {
  		sortType : type,
  		sortName : name
  	};

  	console.log(sort);
  	this.viewCtrl.dismiss(sort);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
 
}
