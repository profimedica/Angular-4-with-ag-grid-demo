webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.filter/ajuro.cards.filter.html":
/***/ (function(module, exports) {

module.exports = "<div><input id='cards_filter' style='width: 229px' [(ngModel)]=\"FilterValue\" (keyup)=\"filterChanged($event)\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.filter/ajuro.cards.filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsFilterComponent = (function () {
    function CardsFilterComponent(dataService) {
        this.dataService = dataService;
    }
    CardsFilterComponent.prototype.filterChanged = function (event) {
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].cardsFilterValue.next(this.FilterValue);
    };
    CardsFilterComponent.prototype.ngOnInit = function () {
        // this.cards = this.cardsService.getCards();
    };
    CardsFilterComponent.prototype.selectCard = function (card) { this.selectedCard = card; };
    CardsFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-cards-filter',
            styles: [__webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.style.css")],
            template: __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.filter/ajuro.cards.filter.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], CardsFilterComponent);
    return CardsFilterComponent;
    var _a;
}());

// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
//# sourceMappingURL=ajuro.cards.filter.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.list/ajuro.cards.list.html":
/***/ (function(module, exports) {

module.exports = "<app-data-provider></app-data-provider>\r\n <div *ngFor=\"let itemz of allTableCards | where : {'Table':FilterValue}; let i = index\">\r\n   <div class='my_table_card object_tab_element'\r\n   (mouseenter)=\"PreviewTable(i)\"\r\n   (dblclick)=\"NavigateToTable(i)\">\r\n   <span [innerHTML]=\"itemz['ajuro_meta'].sources | diff_to_color\"></span>\r\n   <span>{{itemz['Schema']}}</span>.\r\n   <span>{{itemz['Table']}}</span></div>\r\n </div>\r\n <div *ngFor=\"let itemz of allViewCards | where : {'Table':FilterValue} ; let i = index\">\r\n   <div class='my_view_card object_tab_element'\r\n   (mouseenter)=\"PreviewView(i)\"\r\n   (dblclick)=\"NavigateToView(i)\">\r\n   <span>{{itemz['Schema']}}</span>.\r\n   <span>{{itemz['Table']}}</span></div>\r\n </div>\r\n <div *ngFor=\"let itemz of allColumnCards | where : {'Table':FilterValue} ; let i = index\">\r\n   <div class='my_column_card object_tab_element'\r\n   (mouseenter)=\"PreviewColumn(i)\"\r\n   (dblclick)=\"NavigateToColumn(i)\">\r\n   <span>{{itemz['Schema']}}</span>.\r\n   <span>{{itemz['Table']}}</span></div>\r\n </div>\r\n <div *ngFor=\"let itemz of allProcedureCards | where : {'Table':FilterValue} ; let i = index\">\r\n   <div class='my_procedure_card object_tab_element'\r\n   (mouseenter)=\"PreviewProcedure(i)\"\r\n   (dblclick)=\"NavigateToProcedure(i)\">\r\n   <span>{{itemz['Schema']}}</span>.\r\n   <span>{{itemz['Name']}}</span></div>\r\n </div>\r\n <div *ngFor=\"let itemz of allFunctionCards | where : {'Table':FilterValue} ; let i = index\">\r\n   <div class='my_function_card object_tab_element'\r\n   (mouseenter)=\"PreviewFunction(i)\"\r\n   (dblclick)=\"NavigateToFunction(i)\">\r\n   <span>{{itemz['Schema']}}</span>.\r\n   <span>{{itemz['Table']}}</span></div>\r\n </div>\r\n <div *ngFor=\"let itemz of allKeyCards | where : {'Table':FilterValue} ; let i = index\">\r\n   <div class='my_key_card object_tab_element'\r\n   (mouseenter)=\"PreviewKey(i)\"\r\n   (dblclick)=\"NavigateToKey(i)\">\r\n   <span>{{itemz['ParentTable']}}</span>.\r\n   <span>{{itemz['ParentColumn']}}</span>\r\n   <span>{{itemz['ChildTable']}}</span>.\r\n   <span>{{itemz['ChildColumn']}}</span></div>\r\n </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.list/ajuro.cards.list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CardsService } from '../ajuro.cards.service';

var CardsListComponent = (function () {
    var CardsListComponent = CardsListComponent_1 = function CardsListComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        CardsListComponent_1.that = this;
        this.allColumnCards = new Array();
        this.allFunctionCards = new Array();
        this.allKeyCards = new Array();
        this.allProcedureCards = new Array();
        this.allTableCards = new Array();
        this.allViewCards = new Array();
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].cardsFilterValue.subscribe(function (newFilterValue) {
            _this.FilterValue = newFilterValue;
        });
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].allCards.subscribe(function (allCards) {
            _this.allColumnCards = allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Column];
            _this.allFunctionCards = allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Function];
            _this.allKeyCards = allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Key];
            _this.allProcedureCards = allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure];
            if (typeof (allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Table]) !== 'undefined') {
                CardsListComponent_1.that.allTableCards = allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Table];
            }
            _this.allViewCards = allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.View];
        });
    };
    CardsListComponent.prototype.PreviewColumn = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PreviewCard(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Column, this.allColumnCards[id]);
    };
    CardsListComponent.prototype.PreviewFunction = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PreviewCard(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Function, this.allFunctionCards[id]);
    };
    CardsListComponent.prototype.PreviewKey = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PreviewCard(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Key, this.allKeyCards[id]);
    };
    CardsListComponent.prototype.PreviewProcedure = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PreviewCard(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure, this.allProcedureCards[id]);
    };
    CardsListComponent.prototype.PreviewTable = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PreviewCard(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Table, this.allTableCards[id]);
    };
    CardsListComponent.prototype.PreviewView = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PreviewCard(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.View, this.allViewCards[id]);
    };
    CardsListComponent.prototype.NavigateToColumn = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Column, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    CardsListComponent.prototype.NavigateToFunction = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Function, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    CardsListComponent.prototype.NavigateToKey = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Key, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    CardsListComponent.prototype.NavigateToProcedure = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    CardsListComponent.prototype.NavigateToTable = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Record, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    CardsListComponent.prototype.NavigateToView = function (id) {
        CardsListComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.View, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    CardsListComponent.prototype.ngOnInit = function () {
        this.allFunctionCards = this.dataPresenterComponentInstance.dataService.allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Function];
        this.allKeyCards = this.dataPresenterComponentInstance.dataService.allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Key];
        this.allProcedureCards = this.dataPresenterComponentInstance.dataService.allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure];
        this.allTableCards = this.dataPresenterComponentInstance.dataService.allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Table];
        this.allViewCards = this.dataPresenterComponentInstance.dataService.allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.View];
    };
    CardsListComponent.prototype.selectCard = function (card) { this.selectedCard = card; };
    CardsListComponent.prototype.columnOver = function () {
        /*
        if(ControlKeyIsPressed || (field_name && field_name[0] == '_'))
          {
            return;
          }
          CurrentDatabase = database_name;
          CurrentSchema = schema_name;
          CurrentTable = object_name;
          if(object_type !== 'undefined')
          {
            CurrentObjectType = object_type;
          }
          CurrentColumn = field_name;
          if(object_type != 'Key')
          {
            if(value)
            {
              $('#CodeSample').show();
              $('#CodeSample').html(value);
              DisplayOnly('Code');
            }
            else
            {
              if(! object_type == 'Column')
              {
                DisplayOnly('Table');
              }
              else
              {
                DisplayOnly('FloatingObjects');
              }
              //$('#CodeSample').hide();
            }
          }
      
          var object_status = { marker: '<b style="color:#CCC" onclick="PinObject(\''+database_name+'\', \''+database_index+'\', \''+schema_name+'\', \''+object_type+'\', \''+object_name+'\', \''+field_name+'\', \''+value+'\', \''+parent_object_name+'\', \''+parent_field_name+'\')">*</b> ' };
      
      
          if(object_type == 'Key')
          {
            $('#Current_Database_Object').html(object_status.marker + '<span style="color:red">Key: </span>' + schema_name + '.' + object_name + '<i style="color:red">\'s</i> ' + parent_object_name + ' [<b style="color:blue">' + field_name +'</b> = <b style="color:blue">' + parent_field_name +'</b>]');
          }
          else if(field_name)
          {
            $('#Current_Database_Object').html(object_status.marker + '<span style="color:red">Column: </span>' + schema_name + '.' + object_name + '.<b style="color:blue">' + field_name +'</b>');
          }
          else if(object_name)
          {
            $('#Current_Database_Object').html(object_status.marker + '<span style="color:red">' + object_type + ': </span>' + schema_name + '.<b style="color:blue">' + object_name +'</b>');
          }
          else
          {
            $('#Current_Database_Object').html(object_status.marker + '<span style="color:red">Database: </span><b style="color:blue">' + database_name +'</b>');
          }
          GetDatabaseObjectDescription(database_name, schema_name, object_type, object_name, field_name, null);*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */]) === "function" && _a || Object)
    ], CardsListComponent.prototype, "dataPresenterComponentInstance", void 0);
    CardsListComponent = CardsListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-cards-list',
            styles: [__webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.style.css")],
            template: __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.list/ajuro.cards.list.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]) === "function" && _b || Object])
    ], CardsListComponent);
    return CardsListComponent;
    var CardsListComponent_1, _a, _b;
}());

// What you need to do is, add your view to a window and expose this
// window by creating an interface view in the source component.
// Then create a component usage for this window in the component where you want to reuse.
//# sourceMappingURL=ajuro.cards.list.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.preview/ajuro.cards.preview.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class='object_path'>\r\n    <span class=\"preview_card_type\">{{preview_card_type}}</span>\r\n    [<span class=\"preview_card_schema\">{{preview_card_schema}}</span>]\r\n    .[<span class=\"preview_card_table\">{{preview_card_table}}</span>]\r\n    .[<span class=\"preview_card_column\">{{preview_card_column}}</span>]\r\n  </div>\r\n  <input class='object_description' [(ngModel)]=\"DescriptionValue\" (keyup)=\"decriptionChanged($event)\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.preview/ajuro.cards.preview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsPreviewComponent = (function () {
    function CardsPreviewComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.ObjectPathValue = 'Please select a database';
        this.ObjectPathHTML = '';
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].cardPreviewDescription.subscribe(function (newDescriptionValue) {
            _this.DescriptionValue = newDescriptionValue;
        });
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].SelectedCard.subscribe(function (card) {
            var type;
            switch (card['CardType']) {
                case __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Column:
                    type = 'Column';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Database:
                    type = 'Database';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Function:
                    type = 'Function';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Key:
                    type = 'Key';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure:
                    type = 'Procedure';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Record:
                    type = 'Record';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Table:
                    type = 'Table';
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.View:
                    type = 'View';
                    break;
            }
            if (card['CardData'] != null) {
                _this.preview_card_type = type;
                _this.preview_card_schema = card['CardData']['Schema'];
                _this.preview_card_table = card['CardData']['Table'];
            }
            if (card['CardData'] != null && card['CardData'].hasOwnProperty('Column')) {
                _this.preview_card_column = card['CardData']['Column'];
            }
            else {
                _this.preview_card_column = '';
            }
            _this.ObjectPathValue = JSON.stringify(card['CardData']);
        });
    }
    CardsPreviewComponent.prototype.decriptionChanged = function (event) {
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].cardPreviewDescription.next(this.DescriptionValue);
    };
    CardsPreviewComponent.prototype.ngOnInit = function () {
        // this.cards = this.cardsService.getCards();
    };
    CardsPreviewComponent.prototype.selectCard = function (card) { this.selectedCard = card; };
    CardsPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-card-preview',
            styles: [__webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.style.css")],
            template: __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.preview/ajuro.cards.preview.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], CardsPreviewComponent);
    return CardsPreviewComponent;
    var _a;
}());

//# sourceMappingURL=ajuro.cards.preview.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.sources/ajuro.cards.sources.html":
/***/ (function(module, exports) {

module.exports = "<app-data-provider></app-data-provider>\r\n<div *ngFor=\"let itemz of allDatabaseCards | where : {'Name':FilterValue} ; let i = index\">\r\n   <div class='my_database_card object_tab_element'\r\n     id=\"{{i}}\"\r\n     (dblclick)=\"NavigateToDatabase(i)\">\r\n     <input type=\"checkbox\" checked=\"{{itemz['Pinned']}}\" data-md-icheck (change)=\"ToggleDatabase(i)\"/>\r\n     <span>{{itemz['Driver']}}</span>.\r\n     <span>{{itemz['Name']}}</span>\r\n   </div>\r\n </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.sources/ajuro.cards.sources.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsSourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CardsService } from '../ajuro.cards.service';

var CardsSourcesComponent = (function () {
    var CardsSourcesComponent = CardsSourcesComponent_1 = function CardsSourcesComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        CardsSourcesComponent_1.that = this;
        this.allDatabaseCards = new Array();
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].cardsFilterValue.subscribe(function (newFilterValue) {
            _this.FilterValue = newFilterValue;
        });
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].allCards.subscribe(function (allCards) {
            _this.allDatabaseCards = allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Database];
        });
    };
    CardsSourcesComponent.prototype.NavigateToDatabase = function (id) {
        CardsSourcesComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Table, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        CardsSourcesComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.View, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        CardsSourcesComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Column, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        CardsSourcesComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Function, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        CardsSourcesComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        CardsSourcesComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        CardsSourcesComponent_1.that.dataPresenterComponentInstance.dataService
            .PostRequest(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure, id, __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    CardsSourcesComponent.prototype.ngOnInit = function () {
        this.allDatabaseCards = this.dataPresenterComponentInstance.dataService.allCards[__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Database];
    };
    CardsSourcesComponent.prototype.ToggleDatabase = function (id) {
        CardsSourcesComponent_1.that.dataPresenterComponentInstance.dataService
            .toggleConnection(id, true);
    };
    CardsSourcesComponent.prototype.selectCard = function (card) { this.selectedCard = card; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */]) === "function" && _a || Object)
    ], CardsSourcesComponent.prototype, "dataPresenterComponentInstance", void 0);
    CardsSourcesComponent = CardsSourcesComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-cards-sources',
            styles: [__webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.style.css")],
            template: __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.sources/ajuro.cards.sources.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]) === "function" && _b || Object])
    ], CardsSourcesComponent);
    return CardsSourcesComponent;
    var CardsSourcesComponent_1, _a, _b;
}());

//# sourceMappingURL=ajuro.cards.sources.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.cards/ajuro.cards.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.my_column_card{ background-color: #BDF }\r\n.my_column_card:hover{ background-color: #BDC }\r\n\r\n.my_database_card{ background-color: #DDF }\r\n.my_database_card:hover{ background-color: #DDC }\r\n\r\n.my_table_card{ background-color: #FDF }\r\n.my_table_card:hover{ background-color: #FDC }\r\n\r\n.my_view_card{ background-color: #FFC }\r\n.my_view_card:hover{ background-color: #FFE }\r\n\r\n.my_procedure_card{ background-color: #8FF }\r\n.my_procedure_card:hover{ background-color: #BFC }\r\n\r\n.my_function_card{ background-color: #5FF }\r\n.my_function_card:hover{ background-color: #5FC }\r\n\r\n.my_key_card{ background-color: #FFD }\r\n.my_key_card:hover{ background-color: #FFA }\r\n\r\n.object_tab_element {\r\n  border-top: 1px solid silver;\r\n  border-left: 1px solid silver;\r\n  border-right: 1px solid silver;\r\n  color: gray;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.ajuro_circle {\r\n  display: inline-block;\r\n  background: black;\r\n  border-radius: 50%;\r\n  height: 16px;\r\n  width: 16px;\r\n  margin: 2px;\r\n  background: radial-gradient(circle at 10px 10px, #5cabff, #000);\r\n}\r\n\r\n.object_description {\r\n  width: 100%;\r\n  height: 40px;\r\n  color: black;\r\n  font-size: xx-large;\r\n  border: none;\r\n  background-color: #FFFF88;\r\n}\r\n\r\n.preview_card {\r\n  color: gray;\r\n  font-size: xx-large;\r\n}\r\n\r\n.preview_card_type {\r\n  color: red;\r\n}\r\n\r\n.preview_card_schema {\r\n  color: clack;\r\n  font-style: italic;\r\n}\r\n\r\n.preview_card_table {\r\n  color: blue;\r\n  font-weight: bold;\r\n}\r\n\r\n.preview_card_column {\r\n  color: indigo;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ajuro.data/ajuro.data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { CardsService } from '../ajuro.cards/ajuro.cards.service';


// HTTP specific imports


// Data Acccess
var DataService = (function () {
    var DataService = DataService_1 = 
    // Default constructor
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.allCards = new Array();
        if (DataService_1.that != null) {
            return DataService_1.that;
        }
        else {
            // DataService.that = this;
        }
        DataService_1.inst++;
        DataService_1.allCards.subscribe(function (allCards) {
            if (typeof (allCards[DataService_1.CardType.Table]) !== 'undefined') {
                console.log('Updated tables to: ' + allCards[DataService_1.CardType.Table].length);
            }
        });
        DataService_1.cardPreviewDescription.subscribe(function (newDescription) {
            if (DataService_1.oldCardPreviewDescription !== newDescription) {
                _this.PostObjectRequest(DataService_1.RequestType.SetDescription, 'Description', newDescription);
            }
        });
        console.log('DataService.inst:' + DataService_1.inst);
        DataService_1.gridFilters.subscribe(function (filter) {
            if (filter != null && filter.length > 0) {
                console.log(JSON.stringify(filter));
                _this.PostObjectRequest(DataService_1.RequestType.SetDescription, 'Filters', filter);
                _this.PostRequest(DataService_1.CardType.Record, null, DataService_1.RequestType.Data);
            }
        });
        DataService_1.that = this;
    };
    // Setter for a given cards type
    DataService.prototype.injectRecords = function (cardType, data, source, cards) {
        var existentData = Object.assign([], cards);
        if (data.length > 0) {
            var properties = Object.getOwnPropertyNames(data[0]);
            for (var k = 0; k < data.length; k++) {
                var existentCard = null;
                for (var i = 0; i < existentData.length; i++) {
                    var sameValues = true;
                    for (var p = 0; p < properties.length; p++) {
                        if (properties[p] !== 'ajuro_meta' && properties[p] !== 'Database'
                            && existentData[i][properties[p]] !== data[k][properties[p]]) {
                            sameValues = false;
                        }
                    }
                    if (sameValues) {
                        existentCard = existentData[i];
                        if (cardType === 0 && typeof (existentCard.ajuro_meta) === 'undefined') {
                            existentCard.ajuro_meta = { 'sources': [] };
                        }
                        var sourceIndex = existentCard.ajuro_meta.sources.indexOf(source);
                        if (sourceIndex < 0) {
                            existentCard.ajuro_meta.sources.push(source);
                        }
                    }
                }
                if (existentCard === null) {
                    var item = data[k];
                    item['ajuro_meta'] = { sources: [source] };
                    existentData.splice(0, 0, data[k]);
                }
            }
        }
        return existentData; // Passed by reference
    };
    // ajuro.data.service.ts
    /**
     * @name setCards
     * @description Setter for a given cards type
     */
    // Setter for a given cards type
    DataService.prototype.setCards = function (cardType, data, source) {
        DataService_1.LastType.next(cardType);
        var allCards = DataService_1.allCards.getValue();
        if (typeof (allCards[DataService_1.CardType.Table]) !== 'undefined') {
            console.log(cardType + ' source ' + source + ' Found: ' + allCards[DataService_1.CardType.Table].length);
        }
        if (cardType !== DataService_1.CardType.View &&
            cardType !== DataService_1.CardType.Function &&
            cardType !== DataService_1.CardType.Key &&
            cardType !== DataService_1.CardType.Procedure) {
            allCards[0] = this.injectRecords(cardType, data, source, allCards[0]);
            // this.PostObjectRequest(DataService.RequestType.GetDescription, 'Filters', null);
        }
        if (data.length > 0) {
            var properties = Object.getOwnPropertyNames(data[0]);
            for (var k = 0; k < data.length; k++) {
                var existentCard = null;
                if (typeof (allCards[cardType]) === 'undefined') {
                    allCards[cardType] = [];
                }
                for (var i = 0; i < allCards[cardType].length; i++) {
                    var sameValues = true;
                    for (var p = 0; p < properties.length; p++) {
                        if (properties[p] !== 'ajuro_meta' && properties[p] !== 'Database'
                            && allCards[cardType][i][properties[p]] !== data[k][properties[p]]) {
                            sameValues = false;
                        }
                    }
                    if (sameValues) {
                        existentCard = allCards[cardType][i];
                        if (cardType === 0 && typeof (existentCard.ajuro_meta) === 'undefined') {
                            existentCard.ajuro_meta = { 'sources': [] };
                        }
                        var sourceIndex = existentCard.ajuro_meta.sources.indexOf(source);
                        if (sourceIndex < 0) {
                            existentCard.ajuro_meta.sources.push(source);
                        }
                    }
                }
                if (existentCard === null) {
                    var item = data[k];
                    item['ajuro_meta'] = { sources: [source] };
                    allCards[cardType].push(data[k]);
                }
            }
        }
        DataService_1.allCards.next(allCards);
        if (typeof (DataService_1.allCards.getValue()[DataService_1.CardType.Table]) !== 'undefined') {
            console.log('Update: ' + DataService_1.allCards.getValue()[DataService_1.CardType.Table].length);
        }
    };
    // Getter for a given cards type
    DataService.prototype.getCards = function (cardType) {
        return 0;
    };
    // Add the new arguments to the collection of parameters that can be used to crete the request body
    DataService.prototype.processArguments = function (CardType, data) {
        var selectedRecord;
        switch (CardType) {
            case DataService_1.CardType.Column:
                break;
            case DataService_1.CardType.Database:
                break;
            case DataService_1.CardType.Record:
                if (CardType === DataService_1.CardType.Record) {
                    selectedRecord = DataService_1.SelectedTable['CardData'];
                }
                else {
                    selectedRecord = DataService_1.allCards.getValue()[DataService_1.CardType.Table][data];
                }
                // this.SelectedDatabase = selectedRecord.Database;
                this.SelectedSchema = selectedRecord.Schema;
                this.SelectedTable = selectedRecord.Table;
                break;
            case DataService_1.CardType.Table:
            case DataService_1.CardType.View:
            case DataService_1.CardType.Function:
            case DataService_1.CardType.Key:
            case DataService_1.CardType.Procedure:
                selectedRecord = DataService_1.allCards.getValue()[DataService_1.CardType.Database][data];
                this.setConnection(selectedRecord.Id - 1);
                this.setDatabase(selectedRecord.Name);
                break;
        }
    };
    DataService.prototype.updateCards = function (data) {
        switch (data.post.list) {
            case 'columns':
                this.setCards(DataService_1.CardType.Column, data.data, data.post.connection);
                break;
            case 'connections':
                this.setCards(DataService_1.CardType.Database, data.data, data.post.connection);
                break;
            case 'functions':
                this.setCards(DataService_1.CardType.Function, data.data, data.post.connection);
                break;
            case 'keys':
                this.setCards(DataService_1.CardType.Key, data.data, data.post.connection);
                break;
            case 'procedures':
                this.setCards(DataService_1.CardType.Procedure, data.data, data.post.connection);
                break;
            case 'tables':
                this.setCards(DataService_1.CardType.Table, data.data, data.post.connection);
                break;
            case 'views':
                this.setCards(DataService_1.CardType.View, data.data, data.post.connection);
                break;
            case 'records':
                this.setCards(DataService_1.CardType.Record, data.data, data.post.connection);
                break;
        }
    };
    /**
   * @ngdoc method
   * @name DataService#getConnections
   *  Get all the connections, both pinned ant the selected
   * @param {event} event no parameter
   *
   * @return {method} ArrayConnections as the collection of pinned connection plus the selected one
   */
    DataService.prototype.getConnections = function () {
        var ArrayConnections = DataService_1.PinnedConnections.slice(0);
        var existentIndex = ArrayConnections.indexOf(DataService_1.SelectedConnection);
        if (existentIndex < 0) {
            ArrayConnections.push(DataService_1.SelectedConnection);
        }
        return ArrayConnections;
    };
    // set the current sellection, regardless if is pinned or not
    DataService.prototype.setConnection = function (value) {
        DataService_1.SelectedConnection = value;
    };
    DataService.prototype.toggleConnection = function (value, keep) {
        var existentIndex = DataService_1.PinnedConnections.indexOf(value);
        keep = existentIndex < 0;
        if (keep && existentIndex < 0) {
            DataService_1.PinnedConnections.push(value);
        }
        if (!keep && existentIndex >= 0) {
            DataService_1.PinnedConnections.splice(existentIndex, 1);
        }
    };
    DataService.prototype.getDatabase = function () {
        // console.log('get connection ' + DataService.SelectedDatabase);
        return DataService_1.SelectedDatabase;
    };
    DataService.prototype.setDatabase = function (value) {
        // console.log('set connection ' + DataService.SelectedDatabase);
        DataService_1.SelectedDatabase = value;
    };
    DataService.prototype.getFilters = function () {
        var filters = DataService_1.gridFilters.getValue();
        return filters;
    };
    DataService.prototype.PreviewCard = function (CardType, data) {
        if (CardType === DataService_1.CardType.Table) {
            DataService_1.SelectedTable = { CardType: CardType, CardData: data };
        }
        DataService_1.SelectedCard.next({ CardType: CardType, CardData: data });
        this.PostObjectRequest(DataService_1.RequestType.GetDescription, 'Description', null);
    };
    DataService.prototype.PostObjectRequest = function (RequestType, SubObject, Data) {
        var _this = this;
        var selectedCard = DataService_1.SelectedCard.getValue();
        this.getConnections().forEach(function (connection) {
            var params = {
                action: null,
                database: _this.getDatabase(),
                connection: connection,
                schema: selectedCard.CardData['Schema'],
                object_type: null,
                object: selectedCard.CardData['Table'],
                field: null,
                value: null,
                object_name: SubObject
            };
            switch (RequestType) {
                case DataService_1.RequestType.GetDescription:
                    params.action = 'get_object';
                    break;
                case DataService_1.RequestType.SetDescription:
                    params.action = 'set_object';
                    params.value = Data;
                    break;
            }
            switch (selectedCard.CardType) {
                case DataService_1.CardType.Table:
                    params.object_type = 'Table';
                    break;
                case DataService_1.CardType.Column:
                    params.object_type = 'Column';
                    break;
            }
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers, params: params });
            _this.http.post('http://localhost:86/my/api/index.php', params).subscribe(
            // this.http.post('http://10.101.4.98:86/mm/api/index.php', params).subscribe(
            function (data) {
                if (data != null) {
                    if (data.hasOwnProperty('Description')) {
                        DataService_1.oldCardPreviewDescription = data['Description'];
                        DataService_1.cardPreviewDescription.next(data['Description']);
                    }
                    else {
                        _this.updateCards(data);
                    }
                    console.log(data + ' results!' + JSON.stringify(data['post']));
                }
                else {
                    console.log('No results!');
                }
            }, function (error) {
                console.log(JSON.stringify(error));
            });
        });
    };
    // Bring data from Backend API as Json
    DataService.prototype.PostRequest = function (CardType, data, RequestType) {
        var _this = this;
        // Clear before repopulate...
        var existentCards = DataService_1.allCards.getValue();
        if (RequestType === DataService_1.RequestType.Data) {
            existentCards[CardType] = [];
            if (CardType === DataService_1.CardType.Database
                || CardType === DataService_1.CardType.Table
                || CardType === DataService_1.CardType.Record) {
                existentCards[DataService_1.CardType.Record] = [];
            }
            DataService_1.allCards.next(existentCards);
        }
        if (typeof (DataService_1.allCards.getValue()[DataService_1.CardType.Table]) !== 'undefined') {
            console.log('Clear: ' + DataService_1.allCards.getValue()[DataService_1.CardType.Table].length);
        }
        if (RequestType === DataService_1.RequestType.Data) {
            this.processArguments(CardType, data);
        }
        var selectedObject;
        // switch (CardType) {
        //case DataService.CardType.Column:
        if (data != null) {
            selectedObject = DataService_1.allCards.getValue()[CardType][data];
        }
        //break;
        // }
        this.getConnections().forEach(function (connection) {
            // Make the HTTP request:
            var params = {};
            var filters = _this.getFilters();
            if (RequestType === DataService_1.RequestType.Data) {
                switch (CardType) {
                    case DataService_1.CardType.Column:
                        params = {
                            select: 'plain',
                            list: 'columns',
                            database: _this.getDatabase(),
                            connection: connection,
                            fetch: 'objects',
                            filter: '%',
                            startTime: '40839.925'
                        };
                        break;
                    case DataService_1.CardType.Database:
                        params = {
                            select: 'plain',
                            list: 'connections',
                            fetch: 'objects'
                        };
                        break;
                    case DataService_1.CardType.Function:
                        params = {
                            select: 'plain',
                            list: 'functions',
                            database: _this.getDatabase(),
                            connection: connection,
                            fetch: 'objects',
                            filter: '%',
                            startTime: '40839.925'
                        };
                        break;
                    case DataService_1.CardType.Key:
                        params = {
                            select: 'plain',
                            list: 'keys',
                            database: _this.getDatabase(),
                            connection: connection,
                            fetch: 'objects',
                            filter: '%',
                            startTime: '40839.925'
                        };
                        break;
                    case DataService_1.CardType.Procedure:
                        params = {
                            select: 'plain',
                            list: 'procedures',
                            database: _this.getDatabase(),
                            connection: connection,
                            fetch: 'objects',
                            filter: '%',
                            startTime: '40839.925'
                        };
                        break;
                    case DataService_1.CardType.Table:
                        params = {
                            select: 'plain',
                            list: 'tables',
                            database: _this.getDatabase(),
                            connection: connection,
                            fetch: 'objects',
                            filter: '%',
                            startTime: '40839.925'
                        };
                        break;
                    case DataService_1.CardType.View:
                        params = {
                            select: 'plain',
                            list: 'views',
                            database: _this.getDatabase(),
                            connection: connection,
                            fetch: 'objects',
                            filter: '%',
                            startTime: '40839.925'
                        };
                        break;
                    case DataService_1.CardType.Record:
                        params = {
                            select: 'plain',
                            list: 'records',
                            database: _this.getDatabase(),
                            connection: connection,
                            schema: _this.SelectedSchema,
                            table: _this.SelectedTable,
                            fetch: 'objects',
                            filter: '%',
                            filters: filters,
                            startTime: '40839.925'
                        };
                        break;
                }
            }
            if (RequestType === DataService_1.RequestType.Tag) {
                switch (CardType) {
                    case DataService_1.CardType.Table:
                        params = {
                            action: 'get_description',
                            database: _this.getDatabase(),
                            connection: connection,
                            schema: selectedObject['Schema'],
                            object_type: 'Table',
                            object: selectedObject['Table'],
                            field: null,
                            value: null
                        };
                        break;
                    case DataService_1.CardType.Column:
                        params = {
                            action: 'get_description',
                            database: _this.getDatabase(),
                            connection: connection,
                            schema: selectedObject['Schema'],
                            object_type: 'Column',
                            object: selectedObject['Table'],
                            field: selectedObject['Field'],
                            value: null
                        };
                        break;
                }
            }
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers, params: params });
            _this.http.post('http://localhost:86/my/api/index.php', params).subscribe(
            // this.http.post('http://10.101.4.98:86/mm/api/index.php', params).subscribe(
            function (data) {
                if (data != null) {
                    if (data.hasOwnProperty('description')) {
                        DataService_1.cardPreviewDescription.next(data['description']);
                    }
                    else {
                        _this.updateCards(data);
                    }
                    console.log(data + ' results!' + JSON.stringify(data['post']));
                }
                else {
                    console.log('No results!');
                }
            }, function (error) {
                console.log(JSON.stringify(error));
            });
        });
    };
    // Object types that can be requested
    DataService.CardType = {
        Record: 0,
        Database: 1,
        Table: 2,
        View: 3,
        Column: 4,
        Key: 5,
        Procedure: 6,
        Function: 7
    };
    DataService.RequestType = {
        Tag: 0,
        Data: 1,
        Filters: 2,
        GetDescription: 3,
        SetDescription: 4
    };
    // Last used card
    DataService.SelectedTable = null;
    DataService.SelectedCard = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]({ CardType: null, CardData: null });
    // Here all cards will be stored by type. The indexes are provided by CardType
    DataService.cardsFilterValue = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]('');
    DataService.gridFilterValue = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]('');
    DataService.cardPreviewDescription = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]('');
    DataService.oldCardPreviewDescription = '';
    DataService.gridFilters = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](new Array());
    DataService.allCards = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](new Array());
    DataService.LastType = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](-1);
    DataService.inst = 0;
    // Connection inndex used to build backend data requests.
    DataService.PinnedConnections = new Array();
    DataService.SelectedDatabase = new Array();
    DataService = DataService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], DataService);
    return DataService;
    var DataService_1, _a;
}());

//# sourceMappingURL=ajuro.data.service.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPresenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataPresenterComponent = (function () {
    function DataPresenterComponent(dataService) {
        this.dataService = dataService;
    }
    DataPresenterComponent.prototype.ngOnInit = function () {
        console.log(this.dataService); // you got the service
    };
    DataPresenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data-provider',
            template: __webpack_require__("../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.html"),
            styles: [__webpack_require__("../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ajuro_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ajuro_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ajuro_data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], DataPresenterComponent);
    return DataPresenterComponent;
    var _a;
}());

//# sourceMappingURL=ajuro.data.presenter.component.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.html":
/***/ (function(module, exports) {

module.exports = "<div></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ajuro.grid/FilterModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModel; });
var FilterModel = (function () {
    function FilterModel() {
    }
    return FilterModel;
}());

//# sourceMappingURL=FilterModel.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.grid/ajuro.grid.area/ajuro.grid.area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridAreaComponent = (function () {
    var GridAreaComponent = GridAreaComponent_1 = function GridAreaComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.TypeOnDisplay = 0;
        GridAreaComponent_1.that = this;
        this.gridOptions = {
            onRowDoubleClicked: this.doSomething,
            defaultColDef: {
                filter: 'text',
                filterParams: {
                    newRowsAction: 'keep'
                },
                allowedAggFuncs: ['sum', 'min', 'max', 'bollocks']
            },
            enableColResize: true,
            // rowModelType: 'enterprise',
            rowGroupPanelShow: 'always',
            animateRows: true,
            showToolPanel: true,
            enableSorting: true,
            suppressDragLeaveHidesColumns: true,
            debug: true
        };
        __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].LastType.subscribe(function (LastType) {
            GridAreaComponent_1.that.TypeOnDisplay = LastType;
        });
        __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].allCards.subscribe(function (allCards) {
            var columns = [];
            if (typeof (allCards[0]) !== 'undefined') {
                if (allCards[0].length > 0) {
                    Object.keys(allCards[0][0]).forEach(function (key) {
                        var meta_renderer = null;
                        if (key === 'ajuro_meta') {
                            meta_renderer = function (params) {
                                var html_value = "";
                                for (var i = 0; i < params.value.sources.length; i++) {
                                    if (typeof (params.value.sources[i]) === 'undefined') {
                                        continue;
                                    }
                                    // html_value += `<span class='ajuro_circle' style='background: radial-gradient(circle at 5px 5px, `
                                    // + MyGridApplicationComponent.colors[ element % MyGridApplicationComponent.colors.length ] +  `, #000);'></span>`;
                                    html_value += "<span style='display: inline-block; background: black; border-radius: 50%; height: 16px; width: 16px; margin: 2px; background: radial-gradient(circle at 10px 10px, "
                                        + GridAreaComponent_1.colors[params.value.sources[i] % GridAreaComponent_1.colors.length] + ", #000);'>" + params.value.sources[i] + "</span>";
                                }
                                return '<span>' + html_value + '</span>';
                            };
                            columns.push({ headerName: 'DB', field: key, cellRenderer: meta_renderer });
                        }
                    });
                    Object.keys(allCards[0][0]).forEach(function (key) {
                        var meta_renderer = null;
                        if (key !== 'ajuro_meta') {
                            columns.push({ headerName: key, field: key });
                        }
                    });
                }
            }
            GridAreaComponent_1.that.columnDefs = columns;
            _this.rowData = allCards[0];
        });
    };
    GridAreaComponent.prototype.ArchiveResponse = function (data) {
        var newEntry = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({});
        this.RequestsHistoryCards.addControl('R' + GridAreaComponent_1.GenericPurposeIndex, newEntry);
        GridAreaComponent_1.GenericPurposeIndex++;
        newEntry.addControl('req', new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            fetch: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            list: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            select: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            startTime: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        }));
        newEntry.addControl('resp', new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        }));
        newEntry.controls['req'].controls['fetch'].setValue(data.post.fetch);
        newEntry.controls['req'].controls['list'].setValue(data.post.list);
        newEntry.controls['req'].controls['select'].setValue(data.post.select);
        newEntry.controls['req'].controls['startTime'].setValue(data.post.startTime);
    };
    ;
    GridAreaComponent.prototype.CrearHistory = function () {
        var _this = this;
        // const customersControls = <{ [key: string]: AbstractControl; }>this.RequestsHistoryCards.controls;
        Object.keys(this.RequestsHistoryCards.controls).forEach(function (key) {
            _this.RequestsHistoryCards.removeControl(key);
        });
    };
    ;
    GridAreaComponent.prototype.ClearCards = function () {
        var _this = this;
        // const customersControls = <{ [key: string]: AbstractControl; }>this.RequestsHistoryCards.controls;
        Object.keys(this.TableCards.controls).forEach(function (key) {
            _this.TableCards.removeControl(key);
        });
    };
    ;
    GridAreaComponent.prototype.AddHistory = function () {
        GridAreaComponent_1.that.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Database, null, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    GridAreaComponent.prototype.SelectTable = function (data) {
        var tableIndex = parseInt(data.substring(2), 10);
        GridAreaComponent_1.that.SelectedSchema = GridAreaComponent_1.that.Tables.data[tableIndex].Schema;
        GridAreaComponent_1.that.SelectedTable = GridAreaComponent_1.that.Tables.data[tableIndex].Table;
        GridAreaComponent_1.that.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Table, null, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        GridAreaComponent_1.that.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.View, null, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        GridAreaComponent_1.that.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Procedure, null, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        GridAreaComponent_1.that.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Function, null, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
        GridAreaComponent_1.that.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Key, null, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    GridAreaComponent.prototype.GoBack = function () {
        // -- //
        GridAreaComponent_1.that.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Database, null, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    GridAreaComponent.prototype.UpdateTable = function () {
        /*for (let i = 0; i < data.data.length; i++ ) {
          this.rowData = data.data;
          this.Tables = data;
        }*/
    };
    GridAreaComponent.prototype.doSomething = function (row) {
        switch (GridAreaComponent_1.that.TypeOnDisplay) {
            case __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Table:
                GridAreaComponent_1.that.dataService.
                    PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Record, row.rowIndex, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
                break;
        }
    };
    GridAreaComponent.prototype.ngOnInit = function () {
        // console.log(DataService); // you got the service
        this.RequestsHistoryCards = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({});
        this.TableCards = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({});
        GridAreaComponent_1.that.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Database, null, __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */].RequestType.Data);
    };
    GridAreaComponent.prototype.GetData = function () {
        // http://localhost:85/my/api/index.php
        // select=plain
        // list=records
        // database=chinook+(SQLite)
        // connection=0
        // schema=default
        // table=playlists
        // fetch=objects
        // startTime=58442.44
    };
    GridAreaComponent.prototype.onGridReady = function (params) {
        params.api.sizeColumnsToFit();
    };
    GridAreaComponent.prototype.selectAllRows = function () {
        this.gridOptions.api.selectAll();
    };
    GridAreaComponent.colors = ['#00FF00', '#FF0000', '#2020FF', '#FF0000'];
    GridAreaComponent.GenericPurposeIndex = 0;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */]) === "function" && _a || Object)
    ], GridAreaComponent.prototype, "dataPresenterComponentInstance", void 0);
    GridAreaComponent = GridAreaComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-grid-area',
            template: __webpack_require__("../../../../../src/app/ajuro.grid/ajuro.grid.area/ajuro.grid.area.html"),
            styles: [__webpack_require__("../../../../../src/app/ajuro.grid/ajuro.grid.style.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_data_service__["a" /* DataService */]) === "function" && _b || Object])
    ], GridAreaComponent);
    return GridAreaComponent;
    var GridAreaComponent_1, _a, _b;
}());

//# sourceMappingURL=ajuro.grid.area.component.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.grid/ajuro.grid.area/ajuro.grid.area.html":
/***/ (function(module, exports) {

module.exports = "<ag-grid-angular style=\"width: 1500px; height: 800px; margin-top: 0px; vertical-align: top\"\r\n  class=\"ag-fresh\"\r\n  [rowData]=\"rowData\"\r\n  [columnDefs]=\"columnDefs\"\r\n  [gridOptions]=\"gridOptions\"\r\n  (gridReady)=\"onGridReady($event)\">\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ "../../../../../src/app/ajuro.grid/ajuro.grid.filter/ajuro.grid.filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FilterModel__ = __webpack_require__("../../../../../src/app/ajuro.grid/FilterModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridFilterComponent = (function () {
    function GridFilterComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.GridFilterValue = '';
        this.GridFilters = new Array();
        this.ColumnDefs = new Array();
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].allCards.subscribe(function (allCards) {
            var columns = [];
            _this.GridFilters = new Array();
            if (typeof (allCards[0]) !== 'undefined') {
                if (allCards[0].length > 0) {
                    Object.keys(allCards[0][0]).forEach(function (key) {
                        if (key !== 'ajuro_meta') {
                            columns.push({ headerName: key, field: key });
                            var cur_filter = _this.getFilter(key);
                            // if ( this.getFilter(key) == null ) {
                            var filter = new __WEBPACK_IMPORTED_MODULE_2__FilterModel__["a" /* FilterModel */]();
                            filter.ColumnName = key;
                            filter.Expression = ' 1 = 1 ';
                            filter.Weight = 1;
                            filter.UpperLimit = 1;
                            filter.LowerLimit = 100;
                            filter.Order = 'Desc';
                            filter.Value = '';
                            filter.MaxRecords = 100;
                            _this.GridFilters.push(filter);
                            // }
                            if (key === _this.SelectedFilter.ColumnName) {
                                filter.Expression = _this.SelectedFilter.Expression;
                                _this.SelectedFilter = filter;
                            }
                        }
                    });
                }
            }
            _this.ColumnDefs = columns;
            _this.GridFilters.forEach(function (filter) {
                var deprected = true;
                Object.keys(allCards[0][0]).forEach(function (key) {
                    if (filter.ColumnName === key) {
                        deprected = false;
                    }
                });
                if (deprected) {
                    // this.GridFilters.splice(this.GridFilters.indexOf(filter), 0);
                }
            });
            // DataService.gridFilters.next(this.GridFilters);
        });
        this.SelectedFilter = new __WEBPACK_IMPORTED_MODULE_2__FilterModel__["a" /* FilterModel */]();
    }
    GridFilterComponent.prototype.getFilter = function (key) {
        for (var i = 0; i < this.GridFilters.length; i++) {
            if (this.GridFilters[i].ColumnName === key) {
                return this.GridFilters[i];
            }
        }
        ;
        return null;
    };
    GridFilterComponent.prototype.gridFilterChanged = function (event) {
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].gridFilters.next(this.GridFilters);
    };
    GridFilterComponent.prototype.filterChanged = function (filterId) {
        __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */].gridFilters.next(this.GridFilters);
    };
    GridFilterComponent.prototype.editFilter = function (filterModel) {
        this.SelectedFilter = filterModel;
    };
    GridFilterComponent.prototype.ngOnInit = function () {
        // this.cards = this.cardsService.getCards();
    };
    GridFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-grid-filter',
            styles: [__webpack_require__("../../../../../src/app/ajuro.grid/ajuro.grid.style.css")],
            template: __webpack_require__("../../../../../src/app/ajuro.grid/ajuro.grid.filter/ajuro.grid.filter.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ajuro_data_ajuro_data_service__["a" /* DataService */]) === "function" && _a || Object])
    ], GridFilterComponent);
    return GridFilterComponent;
    var _a;
}());

//# sourceMappingURL=ajuro.grid.filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.grid/ajuro.grid.filter/ajuro.grid.filter.html":
/***/ (function(module, exports) {

module.exports = "<div class='FilterPanel'>\r\n    <div>\r\n    <table>\r\n        <tr>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=2>\r\n            <select class='filter_element' [(ngModel)]=\"SelectedFilter.ColumnName\">\r\n              <option *ngFor=\"let column of ColumnDefs\" [ngValue]=\"column['headerName']\">{{column['headerName']}}</option>\r\n            </select>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=2>\r\n            <textarea class='filter_element' (keyup)=\"gridFilterChanged($event)\" [(ngModel)]=\"SelectedFilter.Expression\"></textarea>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            Weight:\r\n          </td>\r\n          <td>\r\n            <input class='filter_element' [(ngModel)]=\"SelectedFilter.Weight\" >\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            Order:\r\n          </td>\r\n          <td>\r\n            <select class='filter_element' (change)=\"gridFilterChanged($event)\" [(ngModel)]=\"SelectedFilter.Order\">\r\n                <option>None</option>\r\n                <option>Asc</option>\r\n                <option>Desc</option>\r\n            </select>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            UpperLimit:\r\n          </td>\r\n          <td>\r\n            <input class='filter_element' [(ngModel)]=\"SelectedFilter.UpperLimit\" >\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            LowerLimit:\r\n          </td>\r\n          <td>\r\n            <input class='filter_element' [(ngModel)]=\"SelectedFilter.LowerLimit\" >\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            Max. Records:\r\n          </td>\r\n          <td>\r\n            <input class='filter_element' [(ngModel)]=\"SelectedFilter.MaxRecords\" >\r\n          </td>\r\n        </tr>\r\n    </table>\r\n    <div *ngFor='let item of GridFilters; let i = index'>\r\n      <div class='filter_description' (mouseenter)='editFilter(item)'>\r\n        <span class='filter_column' >{{item['ColumnName']}}</span>\r\n        <span>\r\n          <input class='partial_filter_input' (keyup)=\"filterChanged(i)\" [(ngModel)]=\"item['Value']\" type=\"text\">\r\n        </span>\r\n        <div>\r\n          <span class='Weight'>{{item['Weight']}}</span>\r\n          <span class='filter_expression'>{{item['Expression']}}</span>\r\n          [<span class='filter_tolerance'>{{item['UpperLimit']}}</span> - <span class='filter_tolerance'>{{item['LowerLimit']}}</span>]\r\n        </div>\r\n        <span class='Separator'></span>\r\n      </div>\r\n    </div>\r\n    <div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ajuro.grid/ajuro.grid.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#content {\r\n  padding: 20px;\r\n}\r\n\r\n.container {\r\n  height: 300px;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.sidenav-content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.sidenav {\r\n  padding: 25px;\r\n}\r\n\r\n.filter_element {\r\n  width: 100%\r\n}\r\n\r\n.filter_column {\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\n.filter_description {\r\n  width: 100%;\r\n  border-top: 1px solid gray;\r\n  font-style: italic;\r\n  color: gray;\r\n}\r\n\r\n.filter_expression {\r\n  color: green;\r\n  font-weight: bold;\r\n}\r\n\r\n.filter_tolerance {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n\r\n.partial_filter_input{\r\n  width: 100%;\r\n  background-color: azure;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/async-observable-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncObservablePipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsyncObservablePipeComponent = (function () {
    function AsyncObservablePipeComponent() {
        this.counter$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"]
            .interval(1000);
    }
    AsyncObservablePipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-async-observable-pipe',
            template: "\n  <fieldset>\n    <h3>Async Observable :</h3>\n    <h5>\n      Count: {{counter$ | async}}\n    </h5>\n  </fieldset>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AsyncObservablePipeComponent);
    return AsyncObservablePipeComponent;
}());

//# sourceMappingURL=async-observable-pipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/currency-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyPipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyPipeComponent = (function () {
    function CurrencyPipeComponent() {
        this.angularPrice = 0.567;
        this.angular4Price = 1.3743;
    }
    CurrencyPipeComponent.prototype.ngOnInit = function () {
    };
    CurrencyPipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-currency-pipe',
            template: "<fieldset>\n  <h3>Currency Pipe :</h3>\n  <div>\n    <p>Angular: {{angularPrice | currency:'EUR':false}}</p>\n    <p>Angular 4: {{angular4Price | currency:'EUR':true:'4.2-2'}}</p>\n  </div>\n</fieldset>",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyPipeComponent);
    return CurrencyPipeComponent;
}());

//# sourceMappingURL=currency-pipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/date-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DatePipeComponent = (function () {
    function DatePipeComponent() {
        this.today = Date.now();
    }
    DatePipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-date-pipe',
            template: "\n        {{today | date:'d'}}-{{today | date:'M'}}-{{today | date:'y'}}\n        <!--<p>A alternative, {{today | date:'medium'}}</p>-->\n",
        })
    ], DatePipeComponent);
    return DatePipeComponent;
}());

//# sourceMappingURL=date-pipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/diff_to_color.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiffToColorPipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiffToColorPipeComponent = (function () {
    var DiffToColorPipeComponent = DiffToColorPipeComponent_1 = 
    // static colors = ['#008800', '#888800', '#008888', '#880088'];
    function DiffToColorPipeComponent(sanitized) {
        this.sanitized = sanitized;
    } // Preserve style when dynamicaly injected in HTML
    ;
    DiffToColorPipeComponent.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        var html_value = "";
        value.forEach(function (element) {
            html_value += "<figure _ngcontent-c5 class='ajuro_circle' style='background: radial-gradient(circle at 5px 5px, "
                + DiffToColorPipeComponent_1.colors[element % DiffToColorPipeComponent_1.colors.length] + ", #000);'></figure>";
        });
        return this.sanitized.bypassSecurityTrustHtml(html_value); // Preserve style when dynamicaly injected in HTML
    };
    DiffToColorPipeComponent.colors = ['#00FF00', '#FF0000', '#2020FF', '#FF0000'];
    DiffToColorPipeComponent = DiffToColorPipeComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'diff_to_color',
            pure: false
        })
        // https://cssanimation.rocks/spheres/
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], DiffToColorPipeComponent);
    return DiffToColorPipeComponent;
    var DiffToColorPipeComponent_1, _a;
}());

//# sourceMappingURL=diff_to_color.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/json.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonPipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonPipeComponent = (function () {
    function JsonPipeComponent() {
    }
    JsonPipeComponent.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return JSON.stringify(value);
    };
    JsonPipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'properties',
            pure: false
        })
    ], JsonPipeComponent);
    return JsonPipeComponent;
}());

//# sourceMappingURL=json.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/pipes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json_pipe__ = __webpack_require__("../../../../../src/app/ajuro.pipes/json.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__diff_to_color_pipe__ = __webpack_require__("../../../../../src/app/ajuro.pipes/diff_to_color.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__where_pipe__ = __webpack_require__("../../../../../src/app/ajuro.pipes/where.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__properties_pipe__ = __webpack_require__("../../../../../src/app/ajuro.pipes/properties.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__year_pipe_component__ = __webpack_require__("../../../../../src/app/ajuro.pipes/year-pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__date_pipe_component__ = __webpack_require__("../../../../../src/app/ajuro.pipes/date-pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__titlecase_pipe_component__ = __webpack_require__("../../../../../src/app/ajuro.pipes/titlecase-pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__async_observable_pipe_component__ = __webpack_require__("../../../../../src/app/ajuro.pipes/async-observable-pipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__currency_pipe_component__ = __webpack_require__("../../../../../src/app/ajuro.pipes/currency-pipe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Modules 3rd party


// Pipes







var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__year_pipe_component__["a" /* YearPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__date_pipe_component__["a" /* DatePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__titlecase_pipe_component__["a" /* TitleCasePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__async_observable_pipe_component__["a" /* AsyncObservablePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__currency_pipe_component__["a" /* CurrencyPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_0__json_pipe__["a" /* JsonPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__where_pipe__["a" /* WherePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__properties_pipe__["a" /* PropertiesPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_1__diff_to_color_pipe__["a" /* DiffToColorPipeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__year_pipe_component__["a" /* YearPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__date_pipe_component__["a" /* DatePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__titlecase_pipe_component__["a" /* TitleCasePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__async_observable_pipe_component__["a" /* AsyncObservablePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__currency_pipe_component__["a" /* CurrencyPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_0__json_pipe__["a" /* JsonPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__where_pipe__["a" /* WherePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__properties_pipe__["a" /* PropertiesPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__properties_pipe__["a" /* PropertiesPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_1__diff_to_color_pipe__["a" /* DiffToColorPipeComponent */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/properties.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesPipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PropertiesPipeComponent = (function () {
    function PropertiesPipeComponent() {
    }
    PropertiesPipeComponent.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        if (Object.getOwnPropertyNames(value).length > 0) {
            var x = 0;
        }
        return Object.keys(value);
    };
    PropertiesPipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'properties',
            pure: false
        })
    ], PropertiesPipeComponent);
    return PropertiesPipeComponent;
}());

//# sourceMappingURL=properties.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/titlecase-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleCasePipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleCasePipeComponent = (function () {
    function TitleCasePipeComponent() {
        this.message = 'angular 4 material design';
    }
    TitleCasePipeComponent.prototype.ngOnInit = function () {
    };
    TitleCasePipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-titlecase-pipe',
            template: "\n          {{message | titlecase}}\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TitleCasePipeComponent);
    return TitleCasePipeComponent;
}());

//# sourceMappingURL=titlecase-pipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/where.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WherePipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WherePipeComponent = (function () {
    function WherePipeComponent() {
    }
    WherePipeComponent.prototype.transform = function (values, args) {
        if (args === void 0) { args = null; }
        // console.log('Pipe: ' + JSON.stringify(values));
        var results = new Array();
        var properties = Object.keys(args);
        if (Object.prototype.toString.call(values) === '[object Array]') {
            if (values.length > 0) {
                // console.log(JSON.stringify(values));
            }
            properties.forEach(function (argument) {
                values.forEach(function (value) {
                    if (typeof (value) === 'object') {
                        if (value.hasOwnProperty(argument)) {
                            var filterValue = args[argument].toUpperCase();
                            if (args[argument] === '' || value[argument].toUpperCase().indexOf(filterValue) > 0) {
                                results.push(value);
                            }
                        }
                    }
                });
            });
        }
        return results;
    };
    WherePipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'where',
            pure: false
        })
    ], WherePipeComponent);
    return WherePipeComponent;
}());

//# sourceMappingURL=where.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ajuro.pipes/year-pipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearPipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var YearPipeComponent = (function () {
    function YearPipeComponent() {
        this.today = Date.now();
    }
    YearPipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-year-pipe',
            template: "\n      {{today | date:'y'}}\n",
        })
    ], YearPipeComponent);
    return YearPipeComponent;
}());

//# sourceMappingURL=year-pipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-content {\r\n  padding: 20px;\r\n}\r\n.app-content md-card{\r\n  margin: 20px;\r\n}\r\n\r\n.container {\r\n  z-index: 20;\r\n  display: inherit;\r\n  padding: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-my-grid-application></app-my-grid-application>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajuro_cards_ajuro_cards_sources_ajuro_cards_sources__ = __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.sources/ajuro.cards.sources.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajuro_cards_ajuro_cards_filter_ajuro_cards_filter__ = __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.filter/ajuro.cards.filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajuro_data_ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajuro_cards_ajuro_cards_list_ajuro_cards_list__ = __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.list/ajuro.cards.list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajuro_cards_ajuro_cards_preview_ajuro_cards_preview__ = __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.preview/ajuro.cards.preview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ajuro_grid_ajuro_grid_filter_ajuro_grid_filter_component__ = __webpack_require__("../../../../../src/app/ajuro.grid/ajuro.grid.filter/ajuro.grid.filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ajuro_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/ajuro.pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ag_grid_angular_main__ = __webpack_require__("../../../../ag-grid-angular/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ajuro_grid_ajuro_grid_area_ajuro_grid_area_component__ = __webpack_require__("../../../../../src/app/ajuro.grid/ajuro.grid.area/ajuro.grid.area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_app_my_app_component__ = __webpack_require__("../../../../../src/app/my-app/my-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__red_component_red_component_component__ = __webpack_require__("../../../../../src/app/red-component/red-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_interceptor__ = __webpack_require__("../../../../../src/app/my.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import "ag-grid-enterprise"; // ****





// Modules
// import { AjuroCardsModule } from './ajuro.cards/ajuro.cards.module';

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */],
                __WEBPACK_IMPORTED_MODULE_0__ajuro_cards_ajuro_cards_sources_ajuro_cards_sources__["a" /* CardsSourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__ajuro_cards_ajuro_cards_list_ajuro_cards_list__["a" /* CardsListComponent */],
                __WEBPACK_IMPORTED_MODULE_1__ajuro_cards_ajuro_cards_filter_ajuro_cards_filter__["a" /* CardsFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__ajuro_cards_ajuro_cards_preview_ajuro_cards_preview__["a" /* CardsPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ajuro_grid_ajuro_grid_filter_ajuro_grid_filter_component__["a" /* GridFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__my_app_my_app_component__["a" /* MyGridApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_18__red_component_red_component_component__["a" /* RedComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__ajuro_grid_ajuro_grid_area_ajuro_grid_area_component__["a" /* GridAreaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MdNativeDateModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MdSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MdTooltipModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MdTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__ajuro_pipes_pipes_module__["a" /* PipesModule */],
                // AjuroCardsModule,
                __WEBPACK_IMPORTED_MODULE_14_ag_grid_angular_main__["AgGridModule"].withComponents([__WEBPACK_IMPORTED_MODULE_18__red_component_red_component_component__["a" /* RedComponentComponent */]])
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_19__my_interceptor__["a" /* AjuroInterceptor */],
                    multi: true
                }, __WEBPACK_IMPORTED_MODULE_2__ajuro_data_ajuro_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/my-app/my-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyGridApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajuro_cards_ajuro_cards_filter_ajuro_cards_filter__ = __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.filter/ajuro.cards.filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.presenter/ajuro.data.presenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajuro_grid_ajuro_grid_area_ajuro_grid_area_component__ = __webpack_require__("../../../../../src/app/ajuro.grid/ajuro.grid.area/ajuro.grid.area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajuro_grid_ajuro_grid_filter_ajuro_grid_filter_component__ = __webpack_require__("../../../../../src/app/ajuro.grid/ajuro.grid.filter/ajuro.grid.filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajuro_data_ajuro_data_service__ = __webpack_require__("../../../../../src/app/ajuro.data/ajuro.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ajuro_cards_ajuro_cards_preview_ajuro_cards_preview__ = __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.preview/ajuro.cards.preview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ajuro_cards_ajuro_cards_list_ajuro_cards_list__ = __webpack_require__("../../../../../src/app/ajuro.cards/ajuro.cards.list/ajuro.cards.list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { CardsListComponent } from './../CardsModule';




var MyGridApplicationComponent = (function () {
    var MyGridApplicationComponent = MyGridApplicationComponent_1 = function MyGridApplicationComponent(dataService) {
        this.dataService = dataService;
        __WEBPACK_IMPORTED_MODULE_2__ajuro_grid_ajuro_grid_area_ajuro_grid_area_component__["a" /* GridAreaComponent */].that = this;
        __WEBPACK_IMPORTED_MODULE_4__ajuro_data_ajuro_data_service__["a" /* DataService */].LastType.subscribe(function (LastType) {
            // MyGridApplicationComponent.that.TypeOnDisplay = LastType;
        });
        __WEBPACK_IMPORTED_MODULE_4__ajuro_data_ajuro_data_service__["a" /* DataService */].gridFilters.subscribe(function (FilterModel) {
        });
        __WEBPACK_IMPORTED_MODULE_4__ajuro_data_ajuro_data_service__["a" /* DataService */].allCards.subscribe(function (allCards) {
            if (typeof (allCards[0]) !== 'undefined') {
                if (allCards[0].length > 0) {
                    Object.keys(allCards[0][0]).forEach(function (key) {
                        var meta_renderer = null;
                        if (key === 'ajuro_meta') {
                            meta_renderer = function (params) {
                                var html_value = "";
                                for (var i = 0; i < params.value.sources.length; i++) {
                                    if (typeof (params.value.sources[i]) === 'undefined') {
                                        continue;
                                    }
                                    html_value += "<span style='display: inline-block; background: black; border-radius: 50%; ";
                                    html_value += "height: 16px; width: 16px; margin: 2px; background: radial-gradient(circle at 10px 10px,";
                                    html_value += MyGridApplicationComponent_1.colors[params.value.sources[i] % MyGridApplicationComponent_1.colors.length]
                                        + ", #000);'>" + params.value.sources[i] + "</span>";
                                }
                                return '<span>' + html_value + '</span>';
                            };
                        }
                    });
                }
            }
        });
    };
    MyGridApplicationComponent.prototype.ArchiveResponse = function (data) {
        var newEntry = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({});
        this.RequestsHistoryCards.addControl('R' + MyGridApplicationComponent_1.GenericPurposeIndex, newEntry);
        MyGridApplicationComponent_1.GenericPurposeIndex++;
        newEntry.addControl('req', new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            fetch: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](),
            list: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](),
            select: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](),
            startTime: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]()
        }));
        newEntry.addControl('resp', new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](),
            lastName: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]()
        }));
        newEntry.controls['req'].controls['fetch'].setValue(data.post.fetch);
        newEntry.controls['req'].controls['list'].setValue(data.post.list);
        newEntry.controls['req'].controls['select'].setValue(data.post.select);
        newEntry.controls['req'].controls['startTime'].setValue(data.post.startTime);
    };
    ;
    MyGridApplicationComponent.prototype.CrearHistory = function () {
        var _this = this;
        // const customersControls = <{ [key: string]: AbstractControl; }>this.RequestsHistoryCards.controls;
        Object.keys(this.RequestsHistoryCards.controls).forEach(function (key) {
            _this.RequestsHistoryCards.removeControl(key);
        });
    };
    ;
    MyGridApplicationComponent.prototype.ClearCards = function () {
        var _this = this;
        // const customersControls = <{ [key: string]: AbstractControl; }>this.RequestsHistoryCards.controls;
        Object.keys(this.TableCards.controls).forEach(function (key) {
            _this.TableCards.removeControl(key);
        });
    };
    ;
    MyGridApplicationComponent.prototype.AddHistory = function () {
        MyGridApplicationComponent_1.that.dataPresenterComponentInstance.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_4__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Database);
    };
    MyGridApplicationComponent.prototype.GoBack = function () {
        // -- //
        MyGridApplicationComponent_1.that.dataPresenterComponentInstance.dataService.PostRequest(__WEBPACK_IMPORTED_MODULE_4__ajuro_data_ajuro_data_service__["a" /* DataService */].CardType.Database);
    };
    MyGridApplicationComponent.prototype.ngOnInit = function () {
        // console.log(DataService); // you got the service
        this.RequestsHistoryCards = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({});
        this.TableCards = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({});
    };
    // SELECT CONCAT('INSERT INTO #tbl EXEC sp_helptext ''', SCHEMA_NAME(o.[schema_id]), '.', o.[name], '''; INSERT INTO #tbl SELECT ''GO----', SCHEMA_NAME(o.[schema_id]), '.', o.[name], ';'';') FROM sys.all_objects o
    MyGridApplicationComponent.colors = ['#00FF00', '#FF0000', '#2020FF', '#FF0000'];
    MyGridApplicationComponent.GenericPurposeIndex = 0;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ajuro_data_ajuro_presenter_ajuro_data_presenter_component__["a" /* DataPresenterComponent */]) === "function" && _a || Object)
    ], MyGridApplicationComponent.prototype, "dataPresenterComponentInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__ajuro_cards_ajuro_cards_filter_ajuro_cards_filter__["a" /* CardsFilterComponent */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ajuro_cards_ajuro_cards_filter_ajuro_cards_filter__["a" /* CardsFilterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ajuro_cards_ajuro_cards_filter_ajuro_cards_filter__["a" /* CardsFilterComponent */]) === "function" && _b || Object)
    ], MyGridApplicationComponent.prototype, "cardsFilterComponentInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__ajuro_cards_ajuro_cards_list_ajuro_cards_list__["a" /* CardsListComponent */]),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__ajuro_cards_ajuro_cards_list_ajuro_cards_list__["a" /* CardsListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ajuro_cards_ajuro_cards_list_ajuro_cards_list__["a" /* CardsListComponent */]) === "function" && _c || Object)
    ], MyGridApplicationComponent.prototype, "cardsListComponentInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__ajuro_grid_ajuro_grid_area_ajuro_grid_area_component__["a" /* GridAreaComponent */]),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ajuro_grid_ajuro_grid_area_ajuro_grid_area_component__["a" /* GridAreaComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ajuro_grid_ajuro_grid_area_ajuro_grid_area_component__["a" /* GridAreaComponent */]) === "function" && _d || Object)
    ], MyGridApplicationComponent.prototype, "gridAreaComponentInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__ajuro_grid_ajuro_grid_filter_ajuro_grid_filter_component__["a" /* GridFilterComponent */]),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ajuro_grid_ajuro_grid_filter_ajuro_grid_filter_component__["a" /* GridFilterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ajuro_grid_ajuro_grid_filter_ajuro_grid_filter_component__["a" /* GridFilterComponent */]) === "function" && _e || Object)
    ], MyGridApplicationComponent.prototype, "gridFilterComponentInstance", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__ajuro_cards_ajuro_cards_preview_ajuro_cards_preview__["a" /* CardsPreviewComponent */]),
        __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ajuro_cards_ajuro_cards_preview_ajuro_cards_preview__["a" /* CardsPreviewComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ajuro_cards_ajuro_cards_preview_ajuro_cards_preview__["a" /* CardsPreviewComponent */]) === "function" && _f || Object)
    ], MyGridApplicationComponent.prototype, "cardsPreviewComponentInstance", void 0);
    MyGridApplicationComponent = MyGridApplicationComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'app-my-grid-application',
            template: __webpack_require__("../../../../../src/app/my-app/my-app.html"),
            styles: [__webpack_require__("../../../../../src/app/my-app/my-app.css")]
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ajuro_data_ajuro_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ajuro_data_ajuro_data_service__["a" /* DataService */]) === "function" && _g || Object])
    ], MyGridApplicationComponent);
    return MyGridApplicationComponent;
    var MyGridApplicationComponent_1, _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=my-app.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-app/my-app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#content {\r\n  padding: 20px;\r\n}\r\n\r\n.container {\r\nheight: 300px;\r\nborder: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.sidenav-content {\r\ndisplay: -webkit-box;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\nheight: 100%;\r\n-webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n-webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n\r\n.sidenav {\r\npadding: 25px;\r\n}\r\n\r\n.ajuro_circle {\r\n  display: inline-block;\r\n  background: black;\r\n  border-radius: 50%;\r\n  height: 16px;\r\n  width: 16px;\r\n  margin: 2px;\r\n  background: radial-gradient(circle at 10px 10px, #5cabff, #000);\r\n}\r\n\r\n.cards_panel {\r\n  position: fixed;\r\n  left: 0px;\r\n  height: 100%;\r\n  width: 250px;\r\n  max-width: 250px;\r\n  background-color: white;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.filters_panel {\r\n  position: fixed;\r\n  right: 0px;\r\n  height: 100%;\r\n  width: 250px;\r\n  max-width: 250px;\r\n  background-color: white;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-app/my-app.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular 4</h1>\r\n<md-tab-group>\r\n    <md-tab label=\"DATA\">\r\n      <app-cards-filter></app-cards-filter>\r\n      <div class='cards_panel'>\r\n        <!--button type=\"button\" md-button (click)=\"GoBack()\">Back</button-->\r\n        <app-cards-sources></app-cards-sources>\r\n        <app-cards-list></app-cards-list>\r\n        <app-data-provider></app-data-provider>\r\n      </div>\r\n      <span style='width: 840px; margin-top: 0px; margin-left: 250px; vertical-align: top; float:left'>\r\n        <app-card-preview></app-card-preview>\r\n        <app-grid-area></app-grid-area>\r\n      </span>\r\n      <div class='filters_panel'>\r\n        <app-grid-filter></app-grid-filter>\r\n      </div>\r\n      <span style='width: 300px;'>\r\n        <form [formGroup]=\"TableCards\" novalidate  style='width: 300px; display: inline-block'>\r\n            <div *ngFor=\"let itemz of TableCards.controls | properties | where : {'use':FilterValue}\">\r\n                <fieldset formGroupName={{itemz}}>\r\n                    <fieldset formGroupName=\"data\">\r\n                        <div class=\"form-group\">\r\n                          <div *ngFor=\"let fielde of TableCards.controls[itemz].controls['data'].controls | properties\">\r\n                            <input type=\"text\"\r\n                            class=\"form-control\"\r\n                            [formControlName]=\"fielde\"\r\n                            (mouseenter)=\"SelectTable(itemz)\"\r\n                            >\r\n                            <!--[value]=\"itemz+'_'+fielde\"-->\r\n                          </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </fieldset>\r\n            </div>\r\n          <pre>{{TableCards.value | json}}</pre>\r\n        </form>\r\n      </span>\r\n    </md-tab>\r\n    <md-tab label=\"HTTP\">\r\n    <div id=\"content\">\r\n        <md-card>\r\n          <h1>HTTP</h1>\r\n          <h4>HTTP History</h4>\r\n          <button type=\"button\" md-button (click)=\"CrearHistory()\">Clear history</button>\r\n          <button type=\"button\" md-button (click)=\"AddHistory()\">Run Last Request</button>\r\n\r\n          <form [formGroup]=\"RequestsHistoryCards\" novalidate>\r\n              <div *ngFor=\"let itemz of RequestsHistoryCards.controls | properties\">\r\n                  <fieldset formGroupName={{itemz}}>\r\n                      <fieldset formGroupName=\"req\">\r\n                          <div class=\"form-group\">\r\n                            <div *ngFor=\"let fielde of RequestsHistoryCards.controls[itemz].controls['req'].controls | properties\">\r\n                              <input type=\"text\"\r\n                              class=\"form-control\"\r\n                              [formControlName]=\"fielde\"\r\n                              >\r\n                              <!--[value]=\"itemz+'_'+fielde\"-->\r\n                            </div>\r\n                          </div>\r\n                      </fieldset>\r\n                  </fieldset>\r\n              </div>\r\n             <pre>{{RequestsHistoryCards.value | json}}</pre>\r\n          </form>\r\n\r\n         </md-card>\r\n      </div>\r\n    </md-tab>\r\n</md-tab-group>\r\n"

/***/ }),

/***/ "../../../../../src/app/my.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjuroInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AjuroInterceptor = (function () {
    function AjuroInterceptor() {
    }
    AjuroInterceptor.prototype.intercept = function (req, next) {
        console.log(JSON.stringify(req, null, 2));
        var reqCopy = req.clone({});
        return next.handle(reqCopy);
    };
    AjuroInterceptor.prototype.response = function (resp, next) {
        console.log(JSON.stringify(resp, null, 2));
        var respCopy = resp.clone({});
        return null; // next.handle(respCopy);
    };
    AjuroInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AjuroInterceptor);
    return AjuroInterceptor;
}());

//# sourceMappingURL=my.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/red-component/red-component.component.html":
/***/ (function(module, exports) {

module.exports = "<span style=\"color: red\">{{ params.value }}</span>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/red-component/red-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RedComponentComponent = (function () {
    function RedComponentComponent() {
    }
    RedComponentComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    RedComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-red-component',
            template: __webpack_require__("../../../../../src/app/red-component/red-component.component.html")
        })
    ], RedComponentComponent);
    return RedComponentComponent;
}());

//# sourceMappingURL=red-component.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
// for enterprise customers
// LicenseManager.setLicenseKey("your license key");
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map