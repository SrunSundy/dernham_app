import {Component} from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {CollectionService} from '../../services/collection-service';
import {PlacesPage} from '../places/places';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/collections/collections.html',
})
export class CollectionsPage {
  private collections: any;

  constructor(private nav: NavController, private collectionService: CollectionService, private app:App) {
    // set sample data
    this.collections = collectionService.getAll();
  }

  // add bookmark
  addBookMark(collection) {
    collection.bookmarked = !collection.bookmarked;
  }

  // view a collection
  goToCollection(id) {
    this.app.getRootNav().push(PlacesPage);
  }
}
