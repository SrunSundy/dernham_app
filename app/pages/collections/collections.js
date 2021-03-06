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
var collection_service_1 = require('../../services/collection-service');
var places_1 = require('../places/places');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CollectionsPage = (function () {
    function CollectionsPage(nav, collectionService, app) {
        this.nav = nav;
        this.collectionService = collectionService;
        this.app = app;
        // set sample data
        this.collections = collectionService.getAll();
    }
    // add bookmark
    CollectionsPage.prototype.addBookMark = function (collection) {
        collection.bookmarked = !collection.bookmarked;
    };
    // view a collection
    CollectionsPage.prototype.goToCollection = function (id) {
        this.app.getRootNav().push(places_1.PlacesPage);
    };
    CollectionsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/collections/collections.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, collection_service_1.CollectionService, ionic_angular_1.App])
    ], CollectionsPage);
    return CollectionsPage;
}());
exports.CollectionsPage = CollectionsPage;
