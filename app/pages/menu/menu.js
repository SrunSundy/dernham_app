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
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        // get first place for example
        this.place = placeService.getItem(1);
    }
    MenuPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/menu/menu.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, place_service_1.PlaceService])
    ], MenuPage);
    return MenuPage;
}());
exports.MenuPage = MenuPage;
