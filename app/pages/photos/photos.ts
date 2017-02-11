import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PlaceService} from '../../services/place-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/photos/photos.html',
})
export class PhotosPage {
  private place: any;

  constructor(private nav: NavController, private placeService: PlaceService) {
    // get first place for example
    this.place = placeService.getItem(1);
  }
}
