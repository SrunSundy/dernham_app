import {Component, Inject, ViewChild } from '@angular/core';
import {LoadingController, Content ,App, ModalController,AlertController , ActionSheetController, Platform, Storage, LocalStorage} from 'ionic-angular';
import {PlaceService} from '../../services/place-service';
import {SelectLocationPage} from '../select-location/select-location';
import {PlacesPage} from '../places/places';
import {PlaceDetailPage} from '../place-detail/place-detail';
import {SearchPage} from '../search/search';
import {BookmarksPage} from '../bookmarks/bookmarks';
import {MapPage} from '../map/map';
import {NearbyPage} from '../nearby/nearby';
import {PopularShopsPage} from '../popular-shops/popular-shops';

import {CollectionsPage} from '../collections/collections';
import {FeedPage}from '../feed/feed';
import {AccountPage} from '../account/account';
import {LatestPage} from '../latest/latest';
import {CategoriesPage} from '../categories/categories';
import {LocationPage} from '../location/location';
import {DetailPage} from '../detail/detail';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Geolocation } from 'ionic-native';

import {APP_CONFIG, AppConfig} from '../../config/app-config';

import { Lazyload } from '../../components/lazyload/lazyload';

 declare var google;
@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [Lazyload],
  styleUrls: ['css/home.css' ]
})
export class HomePage {
  //category
  @ViewChild(Content) content: Content;
  categoryData:any;
  // current location
  type: string = "Places";
  tap_shop:any;
  tap_food:any;
  head_latest:any;
  head_category:any;
  head_location:any;
  button_nearby:any;
  button_ecoupon:any;
  button_topshop:any;
  button_topmember:any;
  button_event:any;
  button_game:any;
  lan:any;

  sheet_title:any;
  sheet_review:any;
  sheet_save:any;
  sheet_share:any;
  sheet_report:any;
  sheet_turnoff:any;
  sheet_cancel:any;
  infiniteScroll: any;
  infiniteScrollProduct: any;
  page: any = 1;
  public shop_total_page: number = 1;
  lat:any;
  lng:any;
  is_processing:boolean = true;

  public is_category_selected : any = 0;

  private baseUrl: any;
  private apiKey: any;

  private scroll_pos_food : any = 0;
  private scroll_pos_place : any = 0;

  selectedCateId: number=0;
  selectedType: number= 0;
  request_data = {
    "row" : 5,
    "page": 1,
    "serve_category_id" : 0,
    "is_nearby" : false,
    "is_popular" : false,
    "country_id" : 0,
    "city_id" : 0,
    "district_id" : 0,
    "commune_id" : 0,
    "current_lat" : 11.565723328439192,
    "current_lng" : 104.88913536071777
  }

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
  // items = [];
  // list popular places
  places:any;
  platform:any;
  
  constructor(platform: Platform, public loadingCtrl: LoadingController , private http: Http, 
    private placeService:PlaceService, private app:App, private alertCtrl: AlertController ,
    public modalCtrl: ModalController,private actionSheetCtrl: ActionSheetController,
    @Inject(APP_CONFIG) config:AppConfig) {
       
      this.platform = platform;
      this.baseUrl = config.baseUrl;
      this.apiKey = config.apiKey;

  }

  ionViewLoaded(){

    let current_obj = this;
    this.getCurrentLocation();

    let loadingprocess = this.loadingCtrl.create({ content: ''});
    setTimeout(function(){
      loadingprocess.present();

      current_obj.loadCategory();
      current_obj.loadProducts(false,function(){});
      current_obj.loadPlaces(false, function(){}, loadingprocess);
    },800);    

    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
           this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
           this.tap_shop = data[0].HomePage.tap_shop;
           this.tap_food = data[0].HomePage.tap_food;
           this.head_latest= data[0].HomePage.head_latest;
           this.head_category= data[0].HomePage.head_category;
           this.head_location = data[0].HomePage.head_location;
           this.button_nearby = data[0].HomePage.button_nearby; 
           this.button_ecoupon = data[0].HomePage.button_ecoupon;
           this.button_topshop = data[0].HomePage.button_topshop;     
           this.button_topmember = data[0].HomePage.button_topmember;   
           this.button_event = data[0].HomePage.button_event; 
           this.button_game = data[0].HomePage.button_game;    

           this.sheet_title = data[0].HomePage.sheet_title;
           this.sheet_review = data[0].HomePage.sheet_review;
           this.sheet_save= data[0].HomePage.sheet_save;
           this.sheet_share= data[0].HomePage.sheet_share;
           this.sheet_report = data[0].HomePage.sheet_report;
           this.sheet_turnoff = data[0].HomePage.sheet_turnoff; 
           this.sheet_cancel = data[0].HomePage.sheet_cancel;
          });  
      }else{
           this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
           this.tap_shop = data[0].HomePage.tap_shop;
           this.tap_food = data[0].HomePage.tap_food;
           this.head_latest= data[0].HomePage.head_latest;
           this.head_category= data[0].HomePage.head_category;
           this.head_location = data[0].HomePage.head_location;
           this.button_nearby = data[0].HomePage.button_nearby; 
           this.button_ecoupon = data[0].HomePage.button_ecoupon;
           this.button_topshop = data[0].HomePage.button_topshop;     
           this.button_topmember = data[0].HomePage.button_topmember;   
           this.button_event = data[0].HomePage.button_event; 
           this.button_game = data[0].HomePage.button_game;

           this.sheet_title = data[0].HomePage.sheet_title;
           this.sheet_review = data[0].HomePage.sheet_review;
           this.sheet_save= data[0].HomePage.sheet_save;
           this.sheet_share= data[0].HomePage.sheet_share;
           this.sheet_report = data[0].HomePage.sheet_report;
           this.sheet_turnoff = data[0].HomePage.sheet_turnoff; 
           this.sheet_cancel = data[0].HomePage.sheet_cancel;
           });  
      }

    });
  }

  // Initialize slider
  slideAds = {
    initialSlide: 0,
    autoplay: 5000,
    loop: true
  };
  
  getCurrentLocation(){
    Geolocation.getCurrentPosition().then((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }).catch((error) => {
      console.log('Error getting location', error);
    
    });
  }

  loadCategory(){
    var headers = new Headers();
        headers.append('X-API-KEY', this.apiKey);
        headers.append('Content-Type', 'application/json');
    this.http.get(this.baseUrl+'/ServeCategoryRestController/listservecategory',{headers : headers})
      .map(res => res.json())
      .subscribe(data => {
        this.categoryData = data.response_data;
        console.log(this.categoryData);
      },err => {
          let errmsg = this.presentAlert("Error" ,JSON.stringify(err));
          errmsg.present();
         //this.presentAlert("Error" ,JSON.stringify(err));
      }); 
  }

  /* place's source code */

  doInfinitePlace(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    setTimeout(() => {
      this.loadPlaces(true,function(){});
      // infiniteScroll.complete();
    }, 500);
  }

  loadPlaces(scroll, callback,  loading = null ){

    let headers = new Headers();
        headers.append('X-API-KEY', this.apiKey);
        headers.append('Content-Type', 'application/json');
    this.request_data["page"] = this.page;
    let body = JSON.stringify({
      "request_data" : this.request_data
    });

    if(this.is_processing){
      this.is_processing = false;
      this.http.post(this.baseUrl+'/ShopRestController/listshop',body,{headers : headers})
      .map(res => res.json())
      .subscribe(data => {

        let posts =  data['response_data'];
        this.shop_total_page = data['total_page'];
        if (scroll) {
          for (let i = 0; i < posts.length; ++i) {
            this.places.push(posts[i]);
          }
          this.infiniteScroll.complete();
        } else {
          this.places = posts;
        }
        //if (posts.length == 0) this.infiniteScroll.enabled(false);
        this.page++;
        this.is_processing = true;
        if( typeof callback === "function"){
          callback();
        }

        if(loading){
          loading.dismiss();
        }
      },err => {
         if(loading){
          loading.dismiss();
         } 
         let errmsg = this.presentAlert("Error" ,JSON.stringify(err));
         errmsg.present();
         this.is_processing = true;
         
         //console.log(err);
      }); 
    }
      
  }



  /* End place's source code */

  /* redirect to other page functions*/
  popularShops(){
    this.app.getRootNav().push(PopularShopsPage);
  }

  placesDetail(data){
    this.app.getRootNav().push(DetailPage, {shop_id: data.shop_id});
  }

  getLatest(type) {

    let current_obj = this;
    let selectedSort = {
      selectedType : this.selectedType
    }
    let modal = this.modalCtrl.create(LatestPage, { data: type, selectedSort : selectedSort });
    modal.present();
    modal.onDidDismiss((data) => {

      
      if(data){
          this.content.scrollToTop();
          let loadingprocess = this.loadingCtrl.create({
            content: ''
          });
          loadingprocess.present();
          this.head_latest = data.sortName;
          this.selectedType = parseInt(data.sortType);
          let sort_type = parseInt(data.sortType);
          switch(sort_type){
            case 0 :{

              this.request_data["is_popular"] = false;
              this.request_data["is_nearby"] = false;
              break;
            }
            case 1 :{

              this.request_data["is_popular"] = false;
              this.request_data["is_nearby"] = true;
              break;
            }
            case 2 :{

              this.request_data["is_popular"] = true;
              this.request_data["is_nearby"] = false;
              break;
            }
          }
          this.page = 1;

          current_obj.loadPlaces(false, function(){}, loadingprocess);
          
        }else{
         /* loadingprocess.dismiss();
          let err_msg = current_obj.presentAlert("Error", "Unable to load data!");
          err_msg.present();*/
        }
    });
  }
  getCategories(type) {

     let current_obj = this;
     let selectedCate = {
       cateId : this.selectedCateId
     }
     let modal = this.modalCtrl.create(CategoriesPage, { data: type, allData: this.categoryData, selectedCate: selectedCate});
     modal.present();
     modal.onDidDismiss((data) => {
            
        if(data){
        
          this.content.scrollToTop();
          let loadingprocess = this.loadingCtrl.create({
            content: ''
          });
          loadingprocess.present();
          this.head_category = data.categoryName;
          this.is_category_selected = parseInt(data.categoryId);

          this.selectedCateId = data.categoryId;
          this.request_data["serve_category_id"] = data.categoryId;
          this.page = 1;

          current_obj.loadPlaces(false, function(){}, loadingprocess);

          
        }else{
          /*loadingprocess.dismiss();
          let err_msg = current_obj.presentAlert("Error", "Unable to load data!");
          err_msg.present();*/

        }
    });
  }


  // go to places
  viewPlaces() {
    this.app.getRootNav().push(PlacesPage);
  }

  // view a place
  viewPlace(id) {
    this.app.getRootNav().push(PlaceDetailPage, {id: id});
  }

  // go to search page
  goToSearch() {
    this.app.getRootNav().push(SearchPage);
  }

  // // go to bookmarks page
  // goToBookmarks() {
  //   this.app.getRootNav().push(BookmarksPage);
  // }

  // view map
  goToMap() {
    this.app.getRootNav().push(MapPage);
  }

  // view nearby page
  goToNearBy() {
    this.app.getRootNav().push(NearbyPage);
  }


  
  /* End redirect to other page functions*/

  /* addictional operation code */
  subText(str, cutvalue):string{
    if(str.length > 25){
      return str.substring(0,cutvalue)+" ...";  
    }else{
      return str;
    }    
  }

  presentAlert(title , subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Ok']
    });
    return alert;
  }

  moreOptions() {

    if (this.platform.is('ios')) {
        let actionSheet = this.actionSheetCtrl.create({
          buttons: [
            {
              text: this.sheet_review,
              handler: () => {
                
              }
            },{
              text: this.sheet_save,
              handler: () => {
              
              }
            },{
              text: this.sheet_share,
              handler: () => {
                // alert("You click Share");
              }
            },{
              text: this.sheet_report,
              handler: () => {
                // alert("You click Report");
              }
            },{
              text: this.sheet_turnoff,
              handler: () => {
                // alert("You click Turn on notification");
              }
            },{
              text: this.sheet_cancel,
              role: 'cancel',
              handler: () => {
                // console.log('Cancel clicked');
              }
            }
          ]
        });
      actionSheet.present();
    } else if (this.platform.is('android')) {
        let actionSheet = this.actionSheetCtrl.create({
        title: this.sheet_title,
        buttons: [
            {
              text: this.sheet_review,
              icon: 'ios-eye',
              handler: () => {
                 // alert("You click Review");
              }
            },{
              text: this.sheet_save,
              icon: 'ios-bookmark',
              handler: () => {
                // alert("You click Save");
              }
            },{
              text: this.sheet_share,
               icon: 'ios-share-alt',
              handler: () => {
                // alert("You click Share");
              }
            },{
              text: this.sheet_report,
              icon: 'ios-sad',
              handler: () => {
                // alert("You click Report");
              }
            },{
              text: this.sheet_turnoff,
              icon: 'ios-notifications',
              handler: () => {
                // alert("You click Turn on notification");
              }
            },{
              text: this.sheet_cancel,
              role: 'cancel',
              handler: () => {
                // console.log('Cancel clicked');
              }
            }
          ]
      });
      actionSheet.present();
    }
    
  }
  /* End addictional operation code */
    
 

  getScrollHeightFood(){

    this.scroll_pos_food = this.content.getContentDimensions().scrollTop;
    this.content.scrollTo(0, this.scroll_pos_place, 1);
    
  }

  getScrollHeightPlace(){
    this.scroll_pos_place = this.content.getContentDimensions().scrollTop;
    this.content.scrollTo(0, this.scroll_pos_food, 1);
  }
  


  
  getPhnomPenh(type) {
    let modal = this.modalCtrl.create(LocationPage, { data: type});
     modal.present();
  }

  /* product's source code */
  products:any;
  /*product:any;*/
  public product_total_page : number = 1;
  public product_page : number = 1;
  public request_data_p = {
      "row" : 10,
      "page": 1,
      "serve_category_id" : 0,
      "is_nearby" : false,
      "is_popular" : false,
      "country_id" : 0,
      "city_id" : 0,
      "district_id" : 0,
      "commune_id" : 0,
      "current_lat" : 11.565723328439192,
      "current_lng" : 104.88913536071777
  };

  private is_processing_product: boolean = true;
  product_path:any;

  loadProducts(scroll, callback){

    if(this.is_processing_product){
      this.is_processing_product = false;
      let headers = new Headers();
      headers.append('X-API-KEY', this.apiKey);
      headers.append('Content-Type', 'application/json');

      this.request_data_p["page"] = this.product_page;
      let body = JSON.stringify({
        "request_data" : this.request_data_p
      });

      this.http.post(this.baseUrl+'/ProductRestController/listproduct', body, {headers : headers})
      .map(res => res.json())
      .subscribe(data => {

          if(data.response_code == "200"){
            this.product_total_page = data.total_page;
            this.product_path="http://dernham.com/admin/uploadimages/cover/medium/";

            let posts =  data['response_data'];
            if (scroll) {
              for (let i = 0; i < posts.length; ++i) {
                 this.products.push(posts[i]);
              }
              this.infiniteScrollProduct.complete();
            } else {
              this.products  = posts;
            }
            //this.product_page++;
          }else{
             let errmsg = this.presentAlert("Error" , "");
             errmsg.present();
          }
          
          if( typeof callback === "function"){
            callback();
          }
          
          this.is_processing_product = true;
          //this.splitProducts();
      },err => {
         let errmsg = this.presentAlert("Error" ,JSON.stringify(err));
         errmsg.present();
         this.is_processing_product = true;
      }); 

    }
    
  }

  doInfiniteFood(infiniteScroll) {
    this.infiniteScrollProduct = infiniteScroll;
   // console.log(this.infiniteScrollProduct);
    setTimeout(() => {
      this.loadProducts(true,function(){});
      // infiniteScroll.complete();
    }, 500);
  }

  // splitProducts(){
  //   this.products=[{"pro_id":"2","pro_name_en":"Fried Chicken","pro_name_kh":"sdf","pro_image":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg","pro_price":"23.00",
  //   "pro_promote_price":"34.000","pro_short_description":"sdf","shop_id":"13","shop_name_en":"Olympic Restaurant","shop_name_kh":""},
  //   {"pro_id":"2","pro_name_en":"Ice Cream","pro_name_kh":"sdf","pro_image":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg","pro_price":"3.00",
  //   "pro_promote_price":"34.000","pro_short_description":"sdf","shop_id":"13","shop_name_en":"Olympic Restaurant","shop_name_kh":""},
  //   {"pro_id":"2","pro_name_en":"Fried Chicken","pro_name_kh":"sdf","pro_image":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg","pro_price":"23.00",
  //   "pro_promote_price":"34.000","pro_short_description":"sdf","shop_id":"13","shop_name_en":"Olympic Restaurant","shop_name_kh":""},
  //   {"pro_id":"2","pro_name_en":"Ice Cream","pro_name_kh":"sdf","pro_image":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg","pro_price":"3.00",
  //   "pro_promote_price":"34.000","pro_short_description":"sdf","shop_id":"13","shop_name_en":"Olympic Restaurant","shop_name_kh":""},
  //   {"pro_id":"2","pro_name_en":"Fried Chicken","pro_name_kh":"sdf","pro_image":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg","pro_price":"23.00",
  //   "pro_promote_price":"34.000","pro_short_description":"sdf","shop_id":"13","shop_name_en":"Olympic Restaurant","shop_name_kh":""},
  //   {"pro_id":"2","pro_name_en":"Ice Cream","pro_name_kh":"sdf","pro_image":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg","pro_price":"3.00",
  //   "pro_promote_price":"34.000","pro_short_description":"sdf","shop_id":"13","shop_name_en":"Olympic Restaurant","shop_name_kh":""}];
  //   this.product_path="http://dernham.com/admin/uploadimages/cover/medium/";

  //   this.product=[];
  //   var i,row=0;
  //   for(i=0;i<this.products.length;i+=2){
  //      this.product[row]=[];
  //      this.product[row][0]=this.products[i];
  //      if(this.products[i+1])
  //        this.product[row][1]=this.products[i+1];
  //      row++;
  //   }

  // }


  /* End product's source code*/

  

 
}
