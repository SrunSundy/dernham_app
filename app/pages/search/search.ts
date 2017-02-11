import {Component} from '@angular/core';
import {NavController,App} from 'ionic-angular';
import {SearchDetailPage} from '../search-detail/search-detail';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/search/search.html',
})
export class SearchPage {
  private searches = [
    {
      id: 1,
      name: "Pub Street, Siem Reap"
    },
    {
      id:2,
      name: "KE & Cafe, Phnom Penh"
    }

  ]

  constructor(private nav:NavController,private app:App) {}
  popularShops(){
    this.app.getRootNav().push(SearchDetailPage);
  }
}
