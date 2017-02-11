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
var http_1 = require('@angular/http');
var ionic_angular_1 = require('ionic-angular');
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(nav, param, http) {
        var _this = this;
        this.nav = nav;
        this.param = param;
        this.http = http;
        this.lan = new ionic_angular_1.Storage(ionic_angular_1.LocalStorage);
        this.lan.get('lan').then(function (result) {
            if (result == 'en') {
                _this.http.get('language/english.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.title_forgetpwd = data[0].ForgetPwdPage.title_forgetpwd;
                    _this.pl_enter_email = data[0].ForgetPwdPage.pl_enter_email;
                    _this.button_search = data[0].ForgetPwdPage.button_search;
                });
            }
            else {
                _this.http.get('language/khmer.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.title_forgetpwd = data[0].ForgetPwdPage.title_forgetpwd;
                    _this.pl_enter_email = data[0].ForgetPwdPage.pl_enter_email;
                    _this.button_search = data[0].ForgetPwdPage.button_search;
                });
            }
        });
    }
    ForgotPasswordPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/forgot-password/forgot-password.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, http_1.Http])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());
exports.ForgotPasswordPage = ForgotPasswordPage;
