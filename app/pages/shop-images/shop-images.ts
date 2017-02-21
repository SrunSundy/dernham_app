import {Component} from '@angular/core';
import {PlaceService} from '../../services/place-service';
import {FiltersPage} from '../filters/filters';
import {PlaceDetailPage} from '../place-detail/place-detail';
import {SearchPage} from '../search/search';
import {NavParams, App, NavController, ModalController, ActionSheetController, Platform,ViewController, Storage, LocalStorage} from 'ionic-angular';
import {Http, Headers} from '@angular/http';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/shop-images/shop-images.html',
})
export class ShopImagesPage {
  // list of places
  shop_image: any;
  shop_images:any;
  imagesDetail:any;
  lan:any;
  title:any;
  shopId:any;
  shop_image_path:any;

  ionViewLoaded() {
    //load data detail 
    this.shopId=this.typeModal.get('shop_id');
    this.loadDataDetail();   
  }

  constructor(private typeModal: NavParams,private viewCtrl:ViewController,private http: Http,private nav:NavController, private placeService:PlaceService, private app:App,public modalCtrl: ModalController,private actionSheetCtrl: ActionSheetController) {
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
           this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
           this.title = data[0].ShopImagePage.title;
          });  
      }else{
           this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
           this.title = data[0].ShopImagePage.title; 
           });  
      }

    });


    // this.shop_images=[{"sh_img_name":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg"},
    //       {"sh_img_name":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
    //       {"sh_img_name":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg"},
    //       {"sh_img_name":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
    //       {"sh_img_name":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg"},
    //       {"sh_img_name":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
    //       {"sh_img_name":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg"},
          
    //       {"sh_img_name":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg"},
    //       {"sh_img_name":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
    //       {"sh_img_name":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg"},
    //       {"sh_img_name":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"},
    //       {"sh_img_name":"cover_gOb0ri4BJo7c8z2ZqPJV_1479629942.jpg"},
    //       {"sh_img_name":"cover_DLdQtWAmvmTREAW6XU8k_1479629358.jpg"}];

    
    

  }

  loadDataDetail(){
    var  headers = new Headers();
      headers.append('X-API-KEY', '123456');
      headers.append('Content-Type', 'application/json');
    var body = JSON.stringify({
      "request_data" : {
      "shop_id" : this.shopId,
      "img_type" :3,
      "row" : 6,
      "page": 1
        
      }
    });
      this.http.post('http://dernham.com/dernham_API/API/ShopImageRestController/listshopimagebyshopid',body,{headers : headers})
      .map(res => res.json())
      .subscribe(data => {
          this.shop_images = data['response_data'];


          this.shop_image_path="http://dernham.com/admin/uploadimages/shopimages/small/";
          this.shop_image=[];
          var i,row=0;

          for(i=0;i<this.shop_images.length;i+=3){
             //this.shop_image.push(this.shop_images[i],this.shop_images[i+1]);
             this.shop_image[row]=[];
             this.shop_image[row][0]=this.shop_images[i];
             if(this.shop_images[i+1])
               this.shop_image[row][1]=this.shop_images[i+1];
             if(this.shop_images[i+2])
               this.shop_image[row][2]=this.shop_images[i+2];
             row++;
          }

      },err => {
          alert(JSON.stringify(err));
      });
  }
  

}
