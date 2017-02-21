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
var place_detail_1 = require('../place-detail/place-detail');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var BookmarksPage = (function () {
    function BookmarksPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        this.places = placeService.getAll();
    }
    // view a place
    BookmarksPage.prototype.viewPlace = function (id) {
        this.nav.push(place_detail_1.PlaceDetailPage, { id: id });
    };
    BookmarksPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/bookmarks/bookmarks.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, place_service_1.PlaceService])
    ], BookmarksPage);
    return BookmarksPage;
}());
exports.BookmarksPage = BookmarksPage;
