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
var filters_1 = require('../filters/filters');
var place_detail_1 = require('../place-detail/place-detail');
var search_1 = require('../search/search');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var PlacesPage = (function () {
    function PlacesPage(nav, placeService, app, modalCtrl) {
        this.nav = nav;
        this.placeService = placeService;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.places = placeService.getAll();
    }
    // get working hours in today
    PlacesPage.prototype.getWorkingHours = function (hours) {
        var d = new Date();
        var currentDay = {
            from: null,
            to: null
        };
        var currentWeekDay = {};
        switch (d.getDay()) {
            case 0:
                currentDay = hours.sunday;
                currentWeekDay = 'Sun';
                break;
            case 1:
                currentDay = hours.monday;
                currentWeekDay = 'Mon';
                break;
            case 2:
                currentDay = hours.tuesday;
                currentWeekDay = 'Tue';
                break;
            case 3:
                currentDay = hours.wednesday;
                currentWeekDay = 'Wed';
                break;
            case 4:
                currentDay = hours.thursday;
                currentWeekDay = 'Thu';
                break;
            case 5:
                currentDay = hours.friday;
                currentWeekDay = 'Fri';
                break;
            case 6:
                currentDay = hours.saturday;
                currentWeekDay = 'Sat';
                break;
        }
        return currentWeekDay + ' ' + currentDay.from + 'h to ' + currentDay.to + 'h';
    };
    // get limit elements for arr
    PlacesPage.prototype.limitArray = function (arr, limit) {
        var tmpArr = [];
        for (var i = 0; i < limit; i++) {
            tmpArr.push(arr[i]);
        }
        return tmpArr;
    };
    // show filters
    PlacesPage.prototype.showFilters = function () {
        var filterModal = this.modalCtrl.create(filters_1.FiltersPage);
        filterModal.present();
    };
    // view a place
    PlacesPage.prototype.viewPlace = function (id) {
        this.nav.push(place_detail_1.PlaceDetailPage, { id: id });
    };
    // go to search page
    PlacesPage.prototype.goToSearch = function () {
        this.app.getRootNav().push(search_1.SearchPage);
    };
    PlacesPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/places/places.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, place_service_1.PlaceService, ionic_angular_1.App, ionic_angular_1.ModalController])
    ], PlacesPage);
    return PlacesPage;
}());
exports.PlacesPage = PlacesPage;
