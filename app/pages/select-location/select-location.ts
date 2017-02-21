import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/select-location/select-location.html',
})
export class SelectLocationPage {
  private searches = [
    {
      id: 1,
      name: "New York City, NY, USA"
    }
  ]

  constructor(private nav:NavController) {}
}
