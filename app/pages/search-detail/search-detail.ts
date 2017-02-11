import {Component} from '@angular/core';
import {PlaceService} from '../../services/place-service';
import {FiltersPage} from '../filters/filters';
import {PlaceDetailPage} from '../place-detail/place-detail';
import {DetailPage} from '../detail/detail';
import {SearchPage} from '../search/search';
import {NavParams, App, NavController, ModalController, ActionSheetController, Platform,ViewController, Storage, LocalStorage} from 'ionic-angular';
import {Http, Headers} from '@angular/http';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/search-detail/search-detail.html',
})

export class SearchDetailPage {
  lan:any;
  title:any;
  shops:any;
  shop_image_path:any;

  ionViewLoaded() {
    //load data detail s
    this.splitShops();
    this.loadDataDetail();
  }

constructor(private typeModal: NavParams,private viewCtrl:ViewController,private http: Http,private nav:NavController, private placeService:PlaceService, private app:App,public modalCtrl: ModalController,private actionSheetCtrl: ActionSheetController) {  
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
           this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
           this.title = data[0].PopularShop.title;  
          });  
      }else{
           this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
           this.title = data[0].PopularShop.title; 
           });  
      }

    });

  }

  splitShops(){
    this.shops=[
      {"id":"1","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
      {"id":"2","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
      {"id":"3","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
      {"id":"4","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
      {"id":"5","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
      {"id":"6","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
      {"id":"7","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
      {"id":"8","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
      {"id":"9","name":"AEON Mall","open":"07:00:00","close":"17:00:00","address":"Toulkok, Phnom Penh","distance":"3 Km","cover":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"}];
    this.shop_image_path="http://dernham.com/admin/uploadimages/cover/medium/";
  }

  placesDetail(shop_id){
    this.app.getRootNav().push(DetailPage, {shop_id: shop_id});
  }

  loadDataDetail(){
    var  headers = new Headers();
      headers.append('X-API-KEY', '123456');
      headers.append('Content-Type', 'application/json');
    
    this.http.get('http://dernham.com/dernham_API/API/ShopRestController/listPopularShop?current_lat=11.565723328439&current_lng=104.889135360&row=6&page=1',{headers : headers})
      .map(res => res.json())
      .subscribe(data => {
    },err => {
          alert(JSON.stringify(err));
    });
  }

}
