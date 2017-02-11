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
  templateUrl: 'build/pages/categories/categories.html',
})
export class CategoriesPage {
  typemodal:any;
  head_category:any;
  title_shop:any;
  lan:any;
  data:any;
  selectedCate : any;

  public cateIdService: number;
  constructor(private typeModal: NavParams, private http: Http,private nav: NavController, 
      private Modal: ModalController,private viewCtrl:ViewController) { 
    this.typemodal = typeModal.get('data');
    this.data = typeModal.get('allData');
    this.selectedCate = typeModal.get('selectedCate');

    console.log(this.data);
    this.cateIdService = parseInt(this.selectedCate.cateId);
    
   /* if( cateService ){
      this.cateIdService = cateService.categoryId;
    }else{
      this.cateIdService = 0;
    }*/
    
    this.lan = new Storage(LocalStorage);
    this.lan.get('lan').then((result) => {
      if (result == 'en') {
        this.http.get('language/english.json').map(res => res.json()).subscribe(data => {
             this.head_category = data[0].HomePage.head_category;
             this.title_shop = data[0].HomePage.title_shop;
             if(this.typemodal=='Food')
               this.title_shop = data[0].HomePage.title_food;
        });
      }else{
        this.http.get('language/khmer.json').map(res => res.json()).subscribe(data => {
          this.head_category = data[0].HomePage.head_category;
          this.title_shop = data[0].HomePage.title_shop;
             if(this.typemodal=='Food')
               this.title_shop = data[0].HomePage.title_food;
        });      
      }
    });
  }

  getCateory( cateId , cateName){
    //alert(cateId+""+cateName);
    let cate = {
      categoryId : cateId,
      categoryName : cateName
    };
    //this.cate.setCategoryService(cate);
    this.viewCtrl.dismiss(cate);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
 
}
