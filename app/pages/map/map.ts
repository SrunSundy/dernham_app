import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
declare var google: any;
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/map/map.html',
})
export class MapPage {
  private map: any;

  constructor(private nav: NavController, private platform: Platform) {

    // when platform ready, init map
    platform.ready().then(() => {
      // init map
      this.initializeMap();
    });
  }

  initializeMap() {
    var minZoomLevel = 12;

    this.map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng(38.50, -90.50),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }
}
