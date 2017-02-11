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
var ionic_native_1 = require('ionic-native');
// import services
var place_service_1 = require('./services/place-service');
var collection_service_1 = require('./services/collection-service');
var review_service_1 = require('./services/review-service');
// import pages
var intro_1 = require('./pages/intro/intro');
var login_1 = require('./pages/login/login');
var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        var n = localStorage.getItem('on_load_counter');
        if (n === null) {
            n = 0;
            this.rootPage = intro_1.IntroPage;
        }
        else {
            this.rootPage = login_1.LoginPage;
        }
        n++;
        localStorage.setItem("on_load_counter", n);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    }
    MyApp = __decorate([
        core_1.Component({
            template: '<ion-nav [root]="rootPage"></ion-nav>'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
ionic_angular_1.ionicBootstrap(MyApp, [place_service_1.PlaceService, collection_service_1.CollectionService, review_service_1.ReviewService], {
    backButtonText: '',
    iconMode: 'ios',
    tabbarPlacement: 'bottom',
    pageTransition: 'md-transition',
    tabSubPages: true,
    tabbarHighlight: false,
    modalEnter: 'modal-md-slide-in',
    modalLeave: 'modal-md-slide-out',
});
