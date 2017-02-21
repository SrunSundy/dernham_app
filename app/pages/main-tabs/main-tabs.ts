import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {CollectionsPage} from '../collections/collections';
import {FeedPage}from '../feed/feed';
import {UserAccountPage} from '../user-account/user-account';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/main-tabs/main-tabs.html',
})
export class MainTabsPage {
  private tabHome = HomePage;
  private tabCollections = CollectionsPage;
  private tabFeed = FeedPage;
  private tabAccount = UserAccountPage;

  constructor(private nav: NavController) {}
}
