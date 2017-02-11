import {Component} from '@angular/core';
import {Platform, ionicBootstrap, NavParams, NavController,Storage, LocalStorage} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';

// import services
import {PlaceService} from './services/place-service';
import {CollectionService} from './services/collection-service';
import {ReviewService} from './services/review-service';

// import pages
import {IntroPage} from './pages/intro/intro';
import {LatestPage} from './pages/latest/latest';
import {CategoriesPage} from './pages/categories/categories';
import {LocationPage} from './pages/location/location';
import {LoginPage} from './pages/login/login';
import {SignUpPage} from './pages/sign-up/sign-up';
import {ForgotPasswordPage} from './pages/forgot-password/forgot-password';
import {HomePage} from './pages/home/home';
import {DetailPage} from './pages/detail/detail';
import {MainTabsPage} from './pages/main-tabs/main-tabs';
import {PlacesPage} from './pages/places/places';
import {PlaceDetailPage} from './pages/place-detail/place-detail';
import {SelectLocationPage} from './pages/select-location/select-location';
import {SearchPage} from './pages/search/search';
import {AccountPage} from './pages/account/account';
import {CollectionsPage} from './pages/collections/collections';
import {FeedPage} from './pages/feed/feed';
import {MapPage} from './pages/map/map';
import {NearbyPage} from './pages/nearby/nearby';
import {BookmarksPage} from './pages/bookmarks/bookmarks';
import {MenuPage} from './pages/menu/menu';
import {ReviewsPage} from './pages/reviews/reviews';
import {PhotosPage} from './pages/photos/photos';
import {ShopImagesPage} from './pages/shop-images/shop-images';
import {ShopProductsPage} from './pages/shop-products/shop-products';
import {PopularShopsPage} from './pages/popular-shops/popular-shops';
import {SearchDetailPage} from './pages/search-detail/search-detail';
import {ShopDetailPage} from './pages/shop-detail/shop-detail';
import { APP_CONFIG, SYS_CONFIG, AppConfig } from './config/app-config';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage:any;
  private nav:any;
  title: any;
  constructor(private platform:Platform) {

        var n = localStorage.getItem('on_load_counter');
 
        if (n === null) {
            n = 0;
            this.rootPage = IntroPage;
        } else {
          this.rootPage = LoginPage;
        }
        n++;

        localStorage.setItem("on_load_counter", n);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

    });
  }
}

ionicBootstrap(MyApp, [PlaceService, CollectionService, ReviewService,{ provide: APP_CONFIG, useValue: SYS_CONFIG }], {
   backButtonText: '',
   iconMode: 'ios',
   tabbarPlacement: 'bottom',
   pageTransition: 'md-transition',
   tabSubPages: true,
   tabbarHighlight: false,
   modalEnter:'modal-md-slide-in',
   modalLeave:'modal-md-slide-out',
  // platforms: {
  //   android: {
  //     tabbarLayout: 'title-hide'
  //   },
  //   windows: {
  //     tabbarLayout: 'title-hide'
  //   }
  // }
})
