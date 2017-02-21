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
import {ShopDetailPage} from '../shop-detail/shop-detail';

import {APP_CONFIG, AppConfig} from '../../config/app-config';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/detail/detail.html',
  styleUrls : ['css/detail.css']
})
export class DetailPage {
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
  product_path:any;
  facility_path:any;
  shop_image_path:any;
  lb_related_shops:any;
  related_shops:any;

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
  ionViewLoaded() {

    let current_obj = this;
    //load data detail 
    this.shopId=this.typeModal.get('shop_id');

    let loadingprocess = this.loadingCtrl.create({ content: ''});
    setTimeout(function(){
      loadingprocess.present();

      current_obj.loadDataDetail(function(){
        loadingprocess.dismiss();
        current_obj.box_load = "none";
            setTimeout(function(){
                  current_obj.box_load_none = "none";
              },200); 
      });
    },250); 




    //this.shop_name_en = this.shopDetail.shop_name_en;

    //alert(JSON.stringify(this.data));    
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
           this.lb_related_shops = data[0].DetailPage.related_shops;    
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
           this.lb_related_shops = data[0].DetailPage.related_shops;
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

  moreShopImage(){
    this.app.getRootNav().push(ShopImagesPage, {shop_id:this.shopId});
  }

  moreShopProduct(){
    this.app.getRootNav().push(ShopProductsPage, {shop_id:this.shopId});
  }

	viewShopDetail(shop_id){
		 this.app.getRootNav().push(ShopDetailPage, {shop_detail: this.shopDetail});
	}

  relatedShops(shop_id){
    this.app.getRootNav().push(DetailPage, {shop_id: shop_id});
  }

  loadDataDetail(callback){
    var  headers = new Headers();
      headers.append('X-API-KEY', this.apiKey);
      headers.append('Content-Type', 'application/json');
    var body = JSON.stringify({
      "request_data" : {
      "shop_id" : this.shopId,
      "current_lat" : 11.565723328439192,
      "current_lng" : 104.88913536071777
      }
    });
      this.http.post(this.baseUrl+'/ShopRestController/getshop',body,{headers : headers})
      .map(res => res.json())
      .subscribe(data => {
          this.shopDetail = data['response_data'];

          this.shop_name_en=this.shopDetail.shop_name_en;
          this.shop_name_kh=this.shopDetail.shop_name_kh;
          this.shop_cover=this.shopDetail.shop_cover;
          this.open_time=this.shopDetail.shop_opening_time;
          this.close_time=this.shopDetail.shop_close_time;
          this.shop_phone=this.shopDetail.shop_phone;
          this.shop_distance=this.shopDetail.distance;
          this.product_average_price= this.shopDetail.product_average_price;
          this.serve_category=this.shopDetail.serve_category;

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
          
          
          this.related_shops= [
          {"shop_img":this.shop_cover,"shop_id":1},
          {"shop_img":this.shop_cover,"shop_id":2},
          {"shop_img":this.shop_cover,"shop_id":3},
          {"shop_img":this.shop_cover,"shop_id":4},
          {"shop_img":this.shop_cover,"shop_id":5},
          {"shop_img":this.shop_cover,"shop_id":6}];
          
           
          // this.shop_popular_product=[{"image":this.shop_cover},
          // {"image":this.shop_cover},
          // {"image":this.shop_cover},
          // {"image":this.shop_cover},
          // {"image":this.shop_cover}];

          this.shop_popular_product=this.shopDetail.shop_popular_product;

          this.shop_image=this.shopDetail.shop_related_img;

          this.product_path="http://dernham.com/admin/uploadimages/product/small/";
          this.facility_path="http://dernham.com/admin/uploadimages/cover/medium/";
          this.shop_image_path="http://dernham.com/admin/uploadimages/shopimages/small/";
          //callback function when data detail load
          if( typeof callback === "function"){
          callback();
          }
      },err => {
          alert(JSON.stringify(err));
      });
  }
}
