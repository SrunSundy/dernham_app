import {Component, Inject} from '@angular/core';
import {LoadingController, NavParams, App, NavController, ModalController, ActionSheetController, Platform,ViewController, Storage, LocalStorage} from 'ionic-angular';
import {PlaceService} from '../../services/place-service';
import {SelectLocationPage} from '../select-location/select-location';
import {PlacesPage} from '../places/places';
import {PlaceDetailPage} from '../place-detail/place-detail';
import {SearchPage} from '../search/search';
import {BookmarksPage} from '../bookmarks/bookmarks';
import {MapPage} from '../map/map';
import {NearbyPage} from '../nearby/nearby';

import {CollectionsPage} from '../collections/collections';
import {FeedPage}from '../feed/feed';
import {AccountPage} from '../account/account';
import {LatestPage} from '../latest/latest';
import {CategoriesPage} from '../categories/categories';
import {LocationPage} from '../location/location';
import {Http, Headers} from '@angular/http';
import {ShopImagesPage} from '../shop-images/shop-images';
import {ShopProductsPage} from '../shop-products/shop-products';

import {APP_CONFIG, AppConfig} from '../../config/app-config';
@Component({
  templateUrl: 'build/pages/shop-detail/shop-detail.html',
})

export class ShopDetailPage {
  // current location
  private tabCollections = CollectionsPage;
  private tabFeed = FeedPage;
  private tabAccount = AccountPage;
  type: string = "Food";

  private box_load:any = "block";
  private box_load_none:any = "block";

  private currentLocation = 'New York, USA';

  // list slides for slider
  private slides = [
    {
      src: 'img/bugger.jpg'
    },
    {
      src: 'img/drink.jpg'
    },
    {
      src: 'img/entree.jpg'
    }
  ];

  // list data
  data:any;
  shopId:any;
  shop_name_en:any;
  shop_name_kh:any;
  address:any;
  open_time:any;
  close_time:any;
  shop_cover:any;
  shop_phone:any;
  shop_distance:any;
  product_average_price:any;
  shop_popular_product:any;
  serve_category:any;
  shop_facility:any;
  shop_image:any;
  image:any;
  shop_image_path:any;
  product_path:any;
  facility_path:any;

  //base url 
  private baseUrl: any;
  private apiKey: any;

  //language
  head_photo:any;
  head_checkin:any;
  head_save:any;
  head_share:any;
  lb_photo:any;
  lb_checkin:any;
  lb_save:any;
  lb_working_hour:any;
  other_menu:any;
  view_info:any;
  popular_food:any;
  view_more:any;
  lan:any;
  shopDetail:any;
  shop_email:any;
  shop_address:any;
  shop_description:any;

  ionViewLoaded() {
    let current_obj = this;
    //load data detail 
    this.shopDetail=this.typeModal.get('shop_detail');

    console.log(this.shopDetail);
    this.shop_name_en=this.shopDetail.shop_name_en;
          this.shop_name_kh=this.shopDetail.shop_name_kh;
          this.shop_cover=this.shopDetail.shop_cover;
          this.open_time=this.shopDetail.shop_opening_time;
          this.close_time=this.shopDetail.shop_close_time;
          this.shop_phone=this.shopDetail.shop_phone;
          this.shop_distance=this.shopDetail.distance;
          this.product_average_price= this.shopDetail.product_average_price;
          this.serve_category=this.shopDetail.serve_category;
          this.shop_address=this.shopDetail.shop_address;
          this.shop_description=this.shopDetail.shop_description;
          this.shop_email=this.shopDetail.shop_email;


          this.shop_facility= [{"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover},
          {"sh_facility_icon":this.shop_cover}];    

     this.product_path="http://dernham.com/admin/uploadimages/cover/medium/";
          this.facility_path="http://dernham.com/admin/uploadimages/cover/medium/";
          this.shop_image_path="http://dernham.com/admin/uploadimages/cover/medium/";
  
  }

  constructor(@Inject(APP_CONFIG) config:AppConfig, public loadingCtrl: LoadingController, private typeModal: NavParams,private viewCtrl:ViewController,private http: Http,private nav:NavController, private placeService:PlaceService, private app:App,public modalCtrl: ModalController,private actionSheetCtrl: ActionSheetController) {
    // load base url 
    this.baseUrl = config.baseUrl;
    this.apiKey = config.apiKey;

    // load language
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
           this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
           this.head_photo = data[0].DetailPage.head_photo; 
           this.head_save = data[0].DetailPage.head_save;
           this.head_checkin = data[0].DetailPage.head_checkin;
           this.head_share = data[0].DetailPage.head_share;
           this.lb_photo = data[0].DetailPage.lb_photo;
           this.lb_checkin = data[0].DetailPage.lb_checkin;
           this.lb_save = data[0].DetailPage.lb_save;  
           this.lb_working_hour = data[0].DetailPage.lb_working_hour;
           this.other_menu = data[0].DetailPage.other_menu;
           this.view_info = data[0].DetailPage.view_info;
           this.popular_food = data[0].DetailPage.popular_food;  
           this.view_more = data[0].DetailPage.view_more;   
          });  
      }else{
           this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
           this.head_photo = data[0].DetailPage.head_photo; 
           this.head_save = data[0].DetailPage.head_save;
           this.head_checkin = data[0].DetailPage.head_checkin;
           this.head_share = data[0].DetailPage.head_share;
           this.lb_photo = data[0].DetailPage.lb_photo;
           this.lb_checkin = data[0].DetailPage.lb_checkin;
           this.lb_save = data[0].DetailPage.lb_save;  
           this.lb_working_hour = data[0].DetailPage.lb_working_hour;
           this.other_menu = data[0].DetailPage.other_menu;
           this.view_info = data[0].DetailPage.view_info;
           this.popular_food = data[0].DetailPage.popular_food;  
           this.view_more = data[0].DetailPage.view_more;
           });  
      }

    });

  }

  callTo(phonenumber){
    window.location.href = "phonenumber";
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

  loadDataDetail(callback){
	
  }
}
