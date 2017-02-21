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
var home_1 = require('../home/home');
var collections_1 = require('../collections/collections');
var feed_1 = require('../feed/feed');
var account_1 = require('../account/account');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MainTabsPage = (function () {
    function MainTabsPage(nav) {
        this.nav = nav;
        this.tabHome = home_1.HomePage;
        this.tabCollections = collections_1.CollectionsPage;
        this.tabFeed = feed_1.FeedPage;
        this.tabAccount = account_1.AccountPage;
    }
    MainTabsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/main-tabs/main-tabs.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], MainTabsPage);
    return MainTabsPage;
}());
exports.MainTabsPage = MainTabsPage;
