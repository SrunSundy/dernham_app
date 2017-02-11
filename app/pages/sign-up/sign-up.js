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
var main_tabs_1 = require('../main-tabs/main-tabs');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(nav, http) {
        var _this = this;
        this.nav = nav;
        this.http = http;
        this.lan = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.lan.get('lan').then(function (result) {
            if (result == 'en') {
                _this.http.get('language/english.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.title = data[0].SignupPage.title;
                    _this.pl_name = data[0].SignupPage.pl_name;
                    _this.pl_email = data[0].SignupPage.pl_email;
                    _this.pl_pwd = data[0].SignupPage.pl_pwd;
                    _this.pl_repwd = data[0].SignupPage.pl_repwd;
                    _this.button_signup = data[0].SignupPage.button_signup;
                });
            }
            else {
                _this.http.get('language/khmer.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.title = data[0].SignupPage.title;
                    _this.pl_name = data[0].SignupPage.pl_name;
                    _this.pl_email = data[0].SignupPage.pl_email;
                    _this.pl_pwd = data[0].SignupPage.pl_pwd;
                    _this.pl_repwd = data[0].SignupPage.pl_repwd;
                    _this.button_signup = data[0].SignupPage.button_signup;
                });
            }
        });
    }
    // process sign up
    SignUpPage.prototype.signUp = function () {
        // add our sign up code here
        this.nav.push(main_tabs_1.MainTabsPage);
    };
    SignUpPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/sign-up/sign-up.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, http_1.Http])
    ], SignUpPage);
    return SignUpPage;
}());
exports.SignUpPage = SignUpPage;
