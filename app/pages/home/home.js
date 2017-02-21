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
var places_1 = require('../places/places');
var place_detail_1 = require('../place-detail/place-detail');
var search_1 = require('../search/search');
var map_1 = require('../map/map');
var nearby_1 = require('../nearby/nearby');
var latest_1 = require('../latest/latest');
var categories_1 = require('../categories/categories');
var location_1 = require('../location/location');
var detail_1 = require('../detail/detail');
var http_1 = require('@angular/http');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(platform, http, nav, placeService, app, modalCtrl, actionSheetCtrl) {
        this.http = http;
        this.nav = nav;
        this.placeService = placeService;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        // current location
        this.type = "Places";
        this.currentLocation = 'New York, USA';
        // list slides for slider
        this.slides = [
            {
                src: 'img/bugger.jpg'
            },
            {
                src: 'img/drink.jpg'
            },
            {
                src: 'img/entree.jpg'
            }
        ];
        this.items = [];
        // Initialize slider
        this.slideAds = {
            initialSlide: 0,
            autoplay: 5000,
            loop: true
        };
        this.platform = platform;
    }
    HomePage.prototype.ionViewLoaded = function () {
        // this.loadPlaces();
        var _this = this;
        this.lan = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.lan.get('lan').then(function (result) {
            if (result == 'en') {
                _this.http.get('language/english.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.tap_shop = data[0].HomePage.tap_shop;
                    _this.tap_food = data[0].HomePage.tap_food;
                    _this.head_latest = data[0].HomePage.head_latest;
                    _this.head_category = data[0].HomePage.head_category;
                    _this.head_location = data[0].HomePage.head_location;
                    _this.button_nearby = data[0].HomePage.button_nearby;
                    _this.button_ecoupon = data[0].HomePage.button_ecoupon;
                    _this.button_topshop = data[0].HomePage.button_topshop;
                    _this.button_topmember = data[0].HomePage.button_topmember;
                    _this.button_event = data[0].HomePage.button_event;
                    _this.button_game = data[0].HomePage.button_game;
                    _this.sheet_title = data[0].HomePage.sheet_title;
                    _this.sheet_review = data[0].HomePage.sheet_review;
                    _this.sheet_save = data[0].HomePage.sheet_save;
                    _this.sheet_share = data[0].HomePage.sheet_share;
                    _this.sheet_report = data[0].HomePage.sheet_report;
                    _this.sheet_turnoff = data[0].HomePage.sheet_turnoff;
                    _this.sheet_cancel = data[0].HomePage.sheet_cancel;
                });
            }
            else {
                _this.http.get('language/khmer.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.tap_shop = data[0].HomePage.tap_shop;
                    _this.tap_food = data[0].HomePage.tap_food;
                    _this.head_latest = data[0].HomePage.head_latest;
                    _this.head_category = data[0].HomePage.head_category;
                    _this.head_location = data[0].HomePage.head_location;
                    _this.button_nearby = data[0].HomePage.button_nearby;
                    _this.button_ecoupon = data[0].HomePage.button_ecoupon;
                    _this.button_topshop = data[0].HomePage.button_topshop;
                    _this.button_topmember = data[0].HomePage.button_topmember;
                    _this.button_event = data[0].HomePage.button_event;
                    _this.button_game = data[0].HomePage.button_game;
                    _this.sheet_title = data[0].HomePage.sheet_title;
                    _this.sheet_review = data[0].HomePage.sheet_review;
                    _this.sheet_save = data[0].HomePage.sheet_save;
                    _this.sheet_share = data[0].HomePage.sheet_share;
                    _this.sheet_report = data[0].HomePage.sheet_report;
                    _this.sheet_turnoff = data[0].HomePage.sheet_turnoff;
                    _this.sheet_cancel = data[0].HomePage.sheet_cancel;
                });
            }
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            var headers = new http_1.Headers();
            headers.append('X-API-KEY', '123456');
            _this.http.get('http://dernham.com/dernham_API/API/ShopRestController/listshop', { "Headers": headers }).subscribe(function (data) {
                _this.places = data['response_data'];
                for (var i = 0; i < _this.places.length; ++i) {
                    _this.items.push(_this.places[i]);
                }
                console.log(_this.items);
            });
            // for (var i = 0; i < 30; i++) {
            //   this.items.push( this.items.length );
            // }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    HomePage.prototype.loadPlaces = function () {
    };
    HomePage.prototype.placesDetail = function (data) {
        this.app.getRootNav().push(detail_1.DetailPage, { data: data });
    };
    HomePage.prototype.getLatest = function (type) {
        var modal = this.modalCtrl.create(latest_1.LatestPage, { data: type });
        modal.present();
    };
    HomePage.prototype.getCategories = function (type) {
        var modal = this.modalCtrl.create(categories_1.CategoriesPage, { data: type });
        modal.present();
    };
    HomePage.prototype.getPhnomPenh = function (type) {
        var modal = this.modalCtrl.create(location_1.LocationPage, { data: type });
        modal.present();
    };
    HomePage.prototype.moreOptions = function () {
        if (this.platform.is('ios')) {
            var actionSheet = this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: this.sheet_review,
                        handler: function () {
                            // alert("You click Review");
                        }
                    }, {
                        text: this.sheet_save,
                        handler: function () {
                            // alert("You click Save");
                        }
                    }, {
                        text: this.sheet_share,
                        handler: function () {
                            // alert("You click Share");
                        }
                    }, {
                        text: this.sheet_report,
                        handler: function () {
                            // alert("You click Report");
                        }
                    }, {
                        text: this.sheet_turnoff,
                        handler: function () {
                            // alert("You click Turn on notification");
                        }
                    }, {
                        text: this.sheet_cancel,
                        role: 'cancel',
                        handler: function () {
                            // console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else if (this.platform.is('android')) {
            var actionSheet = this.actionSheetCtrl.create({
                title: this.sheet_title,
                buttons: [
                    {
                        text: this.sheet_review,
                        icon: 'ios-eye',
                        handler: function () {
                            // alert("You click Review");
                        }
                    }, {
                        text: this.sheet_save,
                        icon: 'ios-bookmark',
                        handler: function () {
                            // alert("You click Save");
                        }
                    }, {
                        text: this.sheet_share,
                        icon: 'ios-share-alt',
                        handler: function () {
                            // alert("You click Share");
                        }
                    }, {
                        text: this.sheet_report,
                        icon: 'ios-sad',
                        handler: function () {
                            // alert("You click Report");
                        }
                    }, {
                        text: this.sheet_turnoff,
                        icon: 'ios-notifications',
                        handler: function () {
                            // alert("You click Turn on notification");
                        }
                    }, {
                        text: this.sheet_cancel,
                        role: 'cancel',
                        handler: function () {
                            // console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    // go to places
    HomePage.prototype.viewPlaces = function () {
        this.app.getRootNav().push(places_1.PlacesPage);
    };
    // view a place
    HomePage.prototype.viewPlace = function (id) {
        this.app.getRootNav().push(place_detail_1.PlaceDetailPage, { id: id });
    };
    // go to search page
    HomePage.prototype.goToSearch = function () {
        this.app.getRootNav().push(search_1.SearchPage);
    };
    // // go to bookmarks page
    // goToBookmarks() {
    //   this.app.getRootNav().push(BookmarksPage);
    // }
    // view map
    HomePage.prototype.goToMap = function () {
        this.app.getRootNav().push(map_1.MapPage);
    };
    // view nearby page
    HomePage.prototype.goToNearBy = function () {
        this.app.getRootNav().push(nearby_1.NearbyPage);
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, http_1.Http, ionic_angular_1.NavController, place_service_1.PlaceService, ionic_angular_1.App, ionic_angular_1.ModalController, ionic_angular_1.ActionSheetController])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
