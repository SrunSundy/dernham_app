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
var forgot_password_1 = require('../forgot-password/forgot-password');
var sign_up_1 = require('../sign-up/sign-up');
var main_tabs_1 = require('../main-tabs/main-tabs');
var http_1 = require('@angular/http');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, http, param, platform) {
        this.nav = nav;
        this.http = http;
        this.param = param;
    }
    LoginPage.prototype.ionViewLoaded = function () {
        var _this = this;
        this.lan = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.lan.get('lan').then(function (result) {
            if (result == 'en') {
                _this.http.get('language/english.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.facebook = data[0].LoginPage.facebook;
                    _this.pl_username = data[0].LoginPage.pl_username;
                    _this.pl_password = data[0].LoginPage.pl_password;
                    _this.lb_or = data[0].LoginPage.lb_or;
                    _this.button_register = data[0].LoginPage.button_register;
                    _this.title = data[0].LoginPage.title;
                    _this.submit = data[0].LoginPage.submit;
                    _this.forgotpassword = data[0].LoginPage.forgotPassword;
                });
            }
            else {
                _this.http.get('language/khmer.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.facebook = data[0].LoginPage.facebook;
                    _this.pl_username = data[0].LoginPage.pl_username;
                    _this.pl_password = data[0].LoginPage.pl_password;
                    _this.lb_or = data[0].LoginPage.lb_or;
                    _this.button_register = data[0].LoginPage.button_register;
                    _this.title = data[0].LoginPage.title;
                    _this.submit = data[0].LoginPage.submit;
                    _this.forgotpassword = data[0].LoginPage.forgotPassword;
                });
            }
        });
    };
    LoginPage.prototype.getValue = function (language) {
        alert(language);
    };
    // go to forgot password page
    LoginPage.prototype.forgotPwd = function () {
        this.nav.push(forgot_password_1.ForgotPasswordPage, {
            title: this.title
        });
    };
    // process login
    LoginPage.prototype.login = function () {
        // add your login code here
        this.nav.push(main_tabs_1.MainTabsPage);
    };
    // go to sign up page
    LoginPage.prototype.signUp = function () {
        // add our sign up code here
        this.nav.push(sign_up_1.SignUpPage);
    };
    LoginPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/login/login.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, http_1.Http, ionic_angular_1.NavParams, ionic_angular_1.Platform])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
