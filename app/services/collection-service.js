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
var core_1 = require("@angular/core");
var mock_collections_1 = require("./mock-collections");
var CollectionService = (function () {
    function CollectionService() {
        this.collections = mock_collections_1.COLLECTIONS;
    }
    CollectionService.prototype.getAll = function () {
        return this.collections;
    };
    CollectionService.prototype.getItem = function (id) {
        for (var i = 0; i < this.collections.length; i++) {
            if (this.collections[i].id === parseInt(id)) {
                return this.collections[i];
            }
        }
        return null;
    };
    CollectionService.prototype.remove = function (item) {
        this.collections.splice(this.collections.indexOf(item), 1);
    };
    CollectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CollectionService);
    return CollectionService;
}());
exports.CollectionService = CollectionService;
