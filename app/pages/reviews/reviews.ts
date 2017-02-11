import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ReviewService} from '../../services/review-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/reviews/reviews.html',
})
export class ReviewsPage {
  private reviews: any;

  constructor(private nav: NavController, private reviewService: ReviewService) {
    // feed
    this.reviews = reviewService.getAll();
  }
}
