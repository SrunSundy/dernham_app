"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var place_service_1 = require('../../services/place-service');
var menu_1 = require('../menu/menu');
var map_1 = require('../map/map');
var photos_1 = require('../photos/photos');
var reviews_1 = require('../reviews/reviews');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var PlaceDetailPage = (function () {
    function PlaceDetailPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        // get first place for example
        this.place = placeService.getItem(1);
        // get working hours
        this.workingHour = this.getWorkingHours(this.place.working_hours);
    }
    // get working hours in today
    PlaceDetailPage.prototype.getWorkingHours = function (hours) {
        var d = new Date();
        var currentDay = {
            from: null,
            to: null
        };
        var availableNow = false;
        switch (d.getDay()) {
            case 0:
                currentDay = hours.sunday;
                break;
            case 1:
                currentDay = hours.monday;
                break;
            case 2:
                currentDay = hours.tuesday;
                break;
            case 3:
                currentDay = hours.wednesday;
                break;
            case 4:
                currentDay = hours.thursday;
                break;
            case 5:
                currentDay = hours.friday;
                break;
            case 6:
                currentDay = hours.saturday;
                break;
        }
        availableNow = ((d.getHours() >= currentDay.from) && (d.getHours() <= currentDay.to));
        return {
            available: availableNow,
            from: currentDay.from,
            to: currentDay.to
        };
    };
    // get limit elements for arr
    PlaceDetailPage.prototype.limitArray = function (arr, limit) {
        var tmpArr = [];
        for (var i = 0; i < limit; i++) {
            tmpArr.push(arr[i]);
        }
        return tmpArr;
    };
    // add bookmark
    PlaceDetailPage.prototype.addBookMark = function (place) {
        place.bookmarked = !place.bookmarked;
    };
    // go to map
    PlaceDetailPage.prototype.goToMap = function () {
        this.nav.push(map_1.MapPage);
    };
    // to to menu page
    PlaceDetailPage.prototype.goToMenu = function () {
        this.nav.push(menu_1.MenuPage);
    };
    // go to photos
    PlaceDetailPage.prototype.goToPhotos = function () {
        this.nav.push(photos_1.PhotosPage);
    };
    // go to reviews
    PlaceDetailPage.prototype.goToReviews = function () {
        this.nav.push(reviews_1.ReviewsPage);
    };
    PlaceDetailPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/place-detail/place-detail.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, place_service_1.PlaceService])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());
exports.PlaceDetailPage = PlaceDetailPage;
