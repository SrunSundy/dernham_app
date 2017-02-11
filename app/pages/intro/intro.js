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
var login_1 = require('../login/login');
var http_1 = require('@angular/http');
var core_2 = require('@angular/core');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var IntroPage = (function () {
    function IntroPage(nav, http, param) {
        this.nav = nav;
        this.http = http;
        this.param = param;
        this.local_language = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.local_language.set('lan', 'en');
        this.setParams();
    }
    IntroPage.prototype.setParams = function () {
        var _this = this;
        this.lan = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.lan.get('lan').then(function (result) {
            if (result == 'en') {
                _this.http.get('language/english.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.lb_language = data[0].IntroPage.lb_language;
                    _this.head_2slide = data[0].IntroPage.head_2slide;
                    _this.head_3slide = data[0].IntroPage.head_3slide;
                    _this.info_2slide = data[0].IntroPage.info_2slide;
                    _this.info_3slide = data[0].IntroPage.info_3slide;
                    _this.opt_kh = data[0].IntroPage.opt_kh;
                    _this.opt_en = data[0].IntroPage.opt_en;
                    _this.button_cancel = data[0].IntroPage.button_cancel;
                    _this.button_ok = data[0].IntroPage.button_ok;
                });
            }
            else {
                _this.http.get('language/khmer.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.lb_language = data[0].IntroPage.lb_language;
                    _this.head_2slide = data[0].IntroPage.head_2slide;
                    _this.head_3slide = data[0].IntroPage.head_3slide;
                    _this.info_2slide = data[0].IntroPage.info_2slide;
                    _this.info_3slide = data[0].IntroPage.info_3slide;
                    _this.opt_kh = data[0].IntroPage.opt_kh;
                    _this.opt_en = data[0].IntroPage.opt_en;
                    _this.button_cancel = data[0].IntroPage.button_cancel;
                    _this.button_ok = data[0].IntroPage.button_ok;
                });
            }
        });
    };
    IntroPage.prototype.getLanguage = function (language) {
        this.local_language = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.local_language.set('lan', language);
        this.setParams();
    };
    // process login
    IntroPage.prototype.start = function () {
        // add your login code here
        this.nav.push(login_1.LoginPage);
    };
    IntroPage.prototype.nextSilde = function (index) {
        this.slider.slideTo(index);
    };
    __decorate([
        core_2.ViewChild('mySlider'), 
        __metadata('design:type', ionic_angular_1.Slides)
    ], IntroPage.prototype, "slider", void 0);
    IntroPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/intro/intro.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, http_1.Http, ionic_angular_1.NavParams])
    ], IntroPage);
    return IntroPage;
}());
exports.IntroPage = IntroPage;
