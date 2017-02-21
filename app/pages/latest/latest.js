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
var http_1 = require('@angular/http');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LatestPage = (function () {
    function LatestPage(typeModal, nav, http, Modal, viewCtrl) {
        var _this = this;
        this.typeModal = typeModal;
        this.nav = nav;
        this.http = http;
        this.Modal = Modal;
        this.viewCtrl = viewCtrl;
        this.typemodal = typeModal.get('data');
        this.lan = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.lan.get('lan').then(function (result) {
            if (result == 'en') {
                _this.http.get('language/english.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.title_food = data[0].HomePage.title_food;
                    _this.head_latest = data[0].HomePage.head_latest;
                    _this.button_nearby = data[0].HomePage.button_nearby;
                    _this.button_ecoupon = data[0].HomePage.button_ecoupon;
                    _this.button_topshop = data[0].HomePage.button_topshop;
                    _this.button_topmember = data[0].HomePage.button_topmember;
                    _this.button_event = data[0].HomePage.button_event;
                    _this.button_game = data[0].HomePage.button_game;
                });
            }
            else {
                _this.http.get('language/khmer.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.title_food = data[0].HomePage.title_food;
                    _this.head_latest = data[0].HomePage.head_latest;
                    _this.button_nearby = data[0].HomePage.button_nearby;
                    _this.button_ecoupon = data[0].HomePage.button_ecoupon;
                    _this.button_topshop = data[0].HomePage.button_topshop;
                    _this.button_topmember = data[0].HomePage.button_topmember;
                    _this.button_event = data[0].HomePage.button_event;
                    _this.button_game = data[0].HomePage.button_game;
                });
            }
        });
    }
    LatestPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LatestPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/latest/latest.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavParams, ionic_angular_1.NavController, http_1.Http, ionic_angular_1.ModalController, ionic_angular_1.ViewController])
    ], LatestPage);
    return LatestPage;
}());
exports.LatestPage = LatestPage;
