(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n<!--  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button> -->\n  <span>Web Associative Processor</span>\n  <span class=\"example-spacer\"></span>\n  \n  <button mat-raised-button class=\"about\" style=\"margin-right:10px\" (click)=\"openDialogRV()\">\n\t\tRV-Across\n  </button>\n\n  <button mat-raised-button class=\"about\" (click)=\"openDialogAbout()\">\n\t\tAbout\n  </button>\n\n</mat-toolbar>\n<div style=\"padding: 30px; background: #d2d6ef; text-align: center\">\n    <mat-form-field>\n        <mat-label>Operation</mat-label>\n        <mat-select [(value)]=\"op\">\n            <mat-option *ngFor=\"let o of ops\" value=\"{{o}}\">\n                {{o}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field style=\"margin:10px\">\n        <mat-label>Bits</mat-label>\n        <mat-select [(value)]=\"bits\">\n            <mat-option *ngFor=\"let b of qtd_bits\" value=\"{{b}}\">\n                {{b}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-form-field style=\"margin:10px\">\n        <input type=\"number\" matInput placeholder=\"Op quantity\" [(ngModel)]=\"qtd_ops\">\n    </mat-form-field>\n    <br>\n    <button mat-raised-button color=\"primary\" (click)=\"gen_ops()\">Next</button>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\"\n    style=\"background-color: navajowhite; padding: 30px; padding-bottom: 0px\" *ngIf=\"control['next0']\">\n    <div>\n        <div *ngFor=\"let item of operands | keyvalue; let i = index\" [attr.data-index]=\"i\">\n            <div *ngIf=\"item.key[0] == 'A'\"> \n            <mat-form-field style=\"margin:10px\" >\n                <input type=\"number\" matInput placeholder=\"{{item.key}}\" [(ngModel)]=\"operands[item.key]\">\n            </mat-form-field>\n            </div>\n        </div>\n    </div>\n\n\n    <div>\n        <div *ngFor=\"let item of operands | keyvalue; let i = index\" [attr.data-index]=\"i\">\n            <div  *ngIf=\"item.key[0] == 'B'\">\n            <mat-form-field style=\"margin:10px\">\n                <input type=\"number\" matInput placeholder=\"{{item.key}}\" [(ngModel)]=\"operands[item.key]\">\n            </mat-form-field>\n            </div>\n        </div>\n    </div>\n\n\n\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\"\n    style=\"background-color: navajowhite; margin-bottom: 5px; padding-bottom: 25px\" *ngIf=\"control['next0']\">\n    <button mat-raised-button color=\"primary\" (click)=\"start()\">Start</button>\n</div>\n<!-- <div fxLayout=\"column\">asdfad</div> -->\n<div class=\"compare\" style=\"margin-bottom:15px\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\" *ngIf=\"control['next1']\">\n    <div style=\"text-align:center; background-color: grey;  padding: 10px; margin:10px; color:white\">\n        {{index_compare}}º Compare\n    </div>\n\n<div class=\"lookup-table\" fxLayout=\"column\" style=\" width: 300px;\">\n    <div style=\"text-align:center; background-color: #6971ad;   color: white; padding: 10px \">\n        Lookup Table Add\n    </div>\n    <div fxLayout=\"row\" style=\"text-align:center; background-color: darkgray;\">\n        <div fxLayout=\"row\" style=\"border-right: solid 1px; background-color: darkgray; width:98%;\">\n            <div style=\"padding-right: 67px;\n                border-right: solid 1px;\n                margin-right: 30px;\"></div>\n            <div>Compare</div>\n        </div>\n        <div style=\"background-color: darkgray; width:48%;\">Write</div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" style=\"background-color: ghostwhite; padding: 5px;\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"border-right: solid 1px; padding-right: 12px;\">\n            <div>Pass</div>\n            <div>0</div>\n            <div>1</div>\n            <div>2</div>\n            <div>3</div>\n            <!--<div>4</div> -->\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div>Carry</div>\n            <div>0</div>\n            <!-- <div>0</div> -->\n            <div>0</div> \n            <div>1</div>\n            <div>1</div>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div>A</div>\n            <div>1</div>\n            <!--  <div>0</div> -->\n            <div>1</div> \n            <div>0</div>\n            <div>1</div>\n        </div>\n\n        <div fxLayout=\"column\" style=\"border-right: solid 1px; padding-right: 30px\" fxLayoutAlign=\"center center\">\n            <div>B</div>\n            <div>1</div>\n            <!-- <div>1</div> -->\n            <div>0</div> \n            <div>0</div>\n            <div>0</div>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div>Carry</div>\n            <div>1</div>\n            <!-- <div>0</div> -->\n            <div>0</div> \n            <div>0</div>\n            <div>1</div>\n        </div>\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div>B</div> <!-- Changed for better performance-->\n            <div>0</div>\n              <!-- <div>1</div> -->\n            <div>1</div> \n            <div>1</div>\n            <div>0</div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"special-regs\" fxLayout=\"column\" style=\"width: 550px; margin-top: 10px; margin-bottom: 10px; border-left: solid 1px black\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"border-top: solid 1px;  border-right: solid 1px black;\">\n        <div style=\"width:80px; text-align: center; color: #424b8c;\">Mask</div>\n        <div style=\"width:500px; text-align: center; \">{{trace_i[\"mask\"]}}</div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\" border-top: solid 1px black; border-right: solid 1px; border-bottom: solid 1px;\">\n        <div style=\"width:80px; text-align: center; color: #424b8c;\">Key</div>\n        <div style=\"width:500px; text-align: center; \">{{trace_i[\"key\"]}}</div>\n    </div>\n</div>\n\n<div class=\"ap-content\" fxLayout=\"column\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"\" style=\"border: solid 1px black; border-bottom: solid 0px; width:550px;\" *ngFor=\"let op of trace_i['mem']; let j = index\" [attr.data-index]=\"j\">\n    <div *ngIf=\"j%2 == 0\" style=\"width: 15%; text-align: center;\"> A{{j/2}} </div>\n    <div *ngIf=\"j%2 == 0\"style=\"width: 15%; text-align: center;\"> {{op.carry}} </div>\n    <div *ngIf=\"j%2 == 0\"style=\"width: 55%; text-align: center; \">{{op.data}}</div>\n    <div *ngIf=\"j%2 == 0 && op.tag == 0\" style=\"width: 15%; text-align: center; \">{{op.tag}}</div>\n    <div *ngIf=\"j%2 == 0 && op.tag == 1\" style=\"width: 15%; background-color:red; color:white; text-align: center; \">{{op.tag}} (Match!)</div>\n\n\n   <div *ngIf=\"j%2 != 0\" style=\"width: 15%; text-align: center;\"> B{{j/2 - 0.5}} </div>\n    <div *ngIf=\"j%2 != 0\" style=\"width: 15%; text-align: center;\"> {{op.carry}} </div>\n    <div *ngIf=\"j%2 != 0\" style=\"width: 55%; text-align: center; \">{{op.data}}</div>\n    <div *ngIf=\"j%2 != 0 && op.tag == 0\" style=\"width: 15%; text-align: center; \">{{op.tag}}</div>\n    <div *ngIf=\"j%2 != 0 && op.tag == 1\" style=\"width: 15%; background-color:red; color:white; text-align: center; \">{{op.tag}} (Match!)</div>\n\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"\" style=\" border-top: solid 1px black; width:550px;\">\n        <div style=\"text-align: center; background-color: #6971ad;   color: white; border-right: solid 1px black; width: 15%\">\n            Op\n        </div>\n        <div style=\"text-align: center; background-color: #6971ad;   color: white; border-right: solid 1px black; width: 15%\">\n            Carry\n        </div>\n        <div style=\"text-align: center; background-color: #6971ad;   color: white; border-right: solid 1px black; width: 54%\">\n            Word\n        </div>\n        <div style=\"text-align: center; background-color: #6971ad;   color: white; border-right: solid 1px black; width: 15%\">\n            Tag\n        </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" style=\"margin-top:15px\">\n     <button mat-raised-button color=\"primary\" style=\"background-color:midnightblue !important\" (click)=\"back_compare()\">Back</button>\n     <button mat-raised-button style=\"background-color:orange !important; color:white\" (click)=\"next_compare()\">Next</button>\n    </div>\n</div>\n</div>\n\n<!--  \n   \n    \n    \n        \n\n        \n        \n        \n        \n        \n        <div fxLayout=\"column\" style=\"text-align: center\" fxLayoutAlign=\"center center\">\n            <div>Carry</div>\n            <div>0</div>\n            <div>1</div>\n            <div>1</div>\n            <div>0</div>\n        </div>\n    <div>    \n    \n    \n    \n    \n    <p>You selected: {{op}} {{bits}}</p> \n    {{ item.key }} - {{ item.value }}\n    <div *ngFor='let key of Object.keys(operands)'>\n        <h3>{{operands[key]}}</h3>\n    </div>       \n    <mat-form-field>\n                        <input matInput placeholder=\"o\" [(ngModel)]=\"o\">\n                    </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n        </mat-form-field>\n-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-detailed-rv.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-detailed-rv.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>RV-Across: An Associative Processing Simulator</h2>\n<div mat-dialog-content>\n<h3>\nWhat is it?\n</h3>\n<p>\nRV-Across is an simulator which provides interface to associative arithmetic and logical operations via custom instructions in RISC-V environment. It is an union between the Spike simulator and an extension that contains the logic of associative processing. This simulator has the capability to generate performance reports cycle-by-cycle (match, mismatch and memory data).\n</p>\n\n<p>\nGithub: https://joninhaevang@bitbucket.org/joninhaevang/rva.git\nDockerHub: https://hub.docker.com/repository/docker/jevsilv/rv-across\n</p>\n<!--\n<div style=\"text-align: center;\">\n    <img src=\"../assets/diagram.jpg\" style=\"padding:20px\" alt=\"AP Diagram\">\n</div>\n-->\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dialog-detailed.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dialog-detailed.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>About</h2>\n<div mat-dialog-content>\n<h3>\n\tAssociative Processing\n</h3>\n<p>\nIt is the way of an Associative Processor (AP) performs parallel operations. Utilizing sequences of comparisons and writings based on Lookup Table, which represents the table truth of the operation, the AP executes arithmetic and logical operations between vectors in parallel spending constant number of cycles.\n</p>\n<p>\nAssociative Processor is composed by:\n</p>\n<ul>\n    <li>Content Addressable Memory (CAM): Associative Memory in which the data will be stored.</li>\n    <li>Lookup Table (LUT): Table containing the values of the bits that will be comparedand written, resulting in the operation.</li>\n    <li>Key: Register designed to select the columns that the processor will compare.\n    <li>Mask: Register used to represent the bits of theLUTthat are used for comparison.</li>\n    <li>Tag: A bit  that  represents  theMatchstate.   This  state  indicates  that  theLUTcomparison bits, represented by theKey, are the same as those of the operators. </li>\n</ul>\n<!--\n<div style=\"text-align: center;\">\n    <img src=\"../assets/diagram.jpg\" style=\"padding:20px\" alt=\"AP Diagram\">\n</div>\n-->\n<h3>\nDeveloper\n</h3>\n<p>\nJonathas Silveira: Master Degree Student at University of Campinas - Institute of Computing - Computer Systems Lab\n</p>\n<p>\nContact: jonathas.silveira@students.ic.unicamp.br\n</p>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./src/app/ap.ts":
/*!***********************!*\
  !*** ./src/app/ap.ts ***!
  \***********************/
/*! exports provided: AP, Simulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AP", function() { return AP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simulator", function() { return Simulator; });
class Word {
    constructor(carry, data, tag) {
        this.carry = carry;
        this.data = data;
        this.tag = tag;
    }
}
Word.ctorParameters = () => [
    { type: Number },
    { type: Number },
    { type: Boolean }
];
class Pass {
    constructor(Cr, A, B, wCr, wC) {
        this.A = A;
        this.B = B;
        this.Cr = Cr;
        this.wC = wC;
        this.wCr = wCr;
    }
}
Pass.ctorParameters = () => [
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean },
    { type: Boolean }
];
class AP {
    constructor(size) {
        this.mem = [];
        this.lookup_table_add = [];
        for (let i = 0; i < size; i++)
            this.mem.push(new Word(0, 0, false));
        this.init_lookup_add();
        this.init_special_regs();
    }
    init_lookup_add() {
        this.lookup_table_add.push(new Pass(false, true, true, true, false));
        //this.lookup_table_add.push(new Pass(false,false,true,false,true));
        this.lookup_table_add.push(new Pass(false, true, false, false, true)); // adding pass, no necessary
        this.lookup_table_add.push(new Pass(true, false, false, false, true));
        this.lookup_table_add.push(new Pass(true, true, false, true, false));
    }
    init_special_regs() {
        this.mask_A = 0;
        this.mask_B = 0;
        this.mask_Cr = 0;
        this.key_A = 0;
        this.key_B = 0;
        this.key_Cr = 0;
    }
}
AP.ctorParameters = () => [
    { type: Number }
];
class Simulator {
    constructor(operands, bits, qtd_ops) {
        this.trace = [];
        this.operands = {};
        this.bits = undefined;
        this.qtd_ops = undefined;
        this.mem_size = undefined;
        this.pass_add_qtd = undefined;
        this.operands = operands;
        this.bits = bits;
        this.qtd_ops = qtd_ops;
        this.mem_size = qtd_ops * 2;
        this.ap = new AP(this.mem_size);
        for (let i = 0; i < this.qtd_ops; i++) {
            let base = i * 2;
            this.ap.mem[base].data = this.operands['A' + i];
            this.ap.mem[base + 1].data = this.operands['B' + i];
        }
        this.pass_add_qtd = 4;
        //console.log(this);
    }
    set_mask(bit) {
        this.ap.mask_A = 1 << bit;
        this.ap.mask_B = 1 << bit;
        this.ap.mask_Cr = 1;
    }
    set_key(pass, bit) {
        let set_bit = 1 << bit;
        this.ap.key_A = 0;
        this.ap.key_B = 0;
        this.ap.key_Cr = 0;
        if (this.ap.lookup_table_add[pass].A) {
            this.ap.key_A |= set_bit;
        }
        if (this.ap.lookup_table_add[pass].B) {
            this.ap.key_B |= set_bit;
        }
        if (this.ap.lookup_table_add[pass].Cr) {
            this.ap.key_Cr = 1;
        }
    }
    compare(base) {
        let C = base + 1; //Changed for B = B + A : 1 = B e 2 = C
        let A_masked = this.ap.mem[base].data & this.ap.mask_A;
        let B_masked = this.ap.mem[base + 1].data & this.ap.mask_B;
        let A_res = this.ap.key_A ^ A_masked;
        let B_res = this.ap.key_B ^ B_masked;
        //console.log(this.ap.mem, this.ap.mask_A, this.ap.mask_B, this.ap.key_A,this.ap.key_B, A_masked, B_masked);
        if (A_res == 0 && B_res == 0 && this.ap.mem[C].carry == this.ap.key_Cr) {
            //console.log("Entrou! Match!");
            this.ap.mem[C].tag = true;
        }
    }
    write(pass, base, bit) {
        let set_bit = 1 << bit;
        let C = base + 1;
        if (this.ap.mem[C].tag) {
            this.ap.lookup_table_add[pass].wCr ? this.ap.mem[C].carry = 1 : this.ap.mem[C].carry = 0;
            this.ap.lookup_table_add[pass].wC ? this.ap.mem[C].data |= set_bit : this.ap.mem[C].data &= ~(set_bit);
            //            console.log("Escrevendo", this.ap.mem);
        }
        this.ap.mem[C].tag = false;
    }
    num_to_bin(n) {
        switch (typeof n) {
            case "boolean":
                if (n) {
                    return "1";
                }
                else {
                    return;
                    0;
                }
                break;
            case "number":
                let bin = n.toString(2);
                while (this.bits > bin.length) {
                    bin = "0" + bin;
                }
                return bin.slice(0, this.bits);
                break;
            default:
                break;
        }
        return null;
    }
    tracing() {
        let mem_bin = [];
        this.ap.mem.map((e) => {
            mem_bin.push({
                carry: +e.carry,
                data: this.num_to_bin(e.data),
                tag: +e.tag
            });
        });
        this.trace.push({
            "mask": this.ap.mask_Cr.toString() + " " + this.num_to_bin(this.ap.mask_A) + " " + this.num_to_bin(this.ap.mask_B),
            "key": this.ap.key_Cr.toString() + " " + this.num_to_bin(this.ap.key_A) + " " + this.num_to_bin(this.ap.key_B),
            mem: mem_bin
        });
    }
    add() {
        this.ap.mask_A = 0;
        this.ap.mask_B = 0;
        this.ap.mask_Cr = 0;
        this.ap.key_A = 0;
        this.ap.key_B = 0;
        this.ap.key_Cr = 0;
        for (let bit = 0; bit < this.bits; bit++) {
            for (let pass = 0; pass < this.pass_add_qtd; pass++) {
                for (let i = 0; i < this.qtd_ops; i++) {
                    let base = i * 2;
                    this.set_mask(bit);
                    this.set_key(pass, bit);
                    this.compare(base);
                    this.tracing();
                    this.write(pass, base, bit);
                }
            }
        }
        //        console.log(this.trace);
    }
}
Simulator.ctorParameters = () => [
    { type: Object },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.about {\n    background: #3f51b5;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5hYm91dCB7XG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _simulator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulator.service */ "./src/app/simulator.service.ts");
/* harmony import */ var _ap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ap */ "./src/app/ap.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_detailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-detailed */ "./src/app/dialog-detailed.ts");
/* harmony import */ var _dialog_detailed_rv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-detailed-rv */ "./src/app/dialog-detailed-rv.ts");







let AppComponent = class AppComponent {
    constructor(sim_service, dialog) {
        this.dialog = dialog;
        this.ops = ['Add'];
        this.qtd_bits = [];
        this.op = undefined;
        this.bits = undefined;
        this.qtd_ops = undefined;
        this.operands = {};
        this.control = { "next0": false, "next1": false };
        this.trace = [];
        this.trace_i = {};
        this.index_compare = 1;
        for (let i = 0; i < 32; i++)
            this.qtd_bits.push((i + 1).toString());
    }
    openDialogRV() {
        this.dialog.open(_dialog_detailed_rv__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewDetailedRV"]);
    }
    openDialogAbout() {
        this.dialog.open(_dialog_detailed__WEBPACK_IMPORTED_MODULE_5__["DialogOverviewDetailed"]);
    }
    gen_ops() {
        if (this.check_entries()) {
            this.operands = {};
            this.control["next0"] = true;
            for (let i = 0; i < this.qtd_ops; i++) {
                this.operands['A' + i] = 0;
                this.operands['B' + i] = 0;
            }
            console.log(this.operands, this.qtd_ops);
        }
        else {
            this.control["next0"] = false;
        }
    }
    check_entries() {
        if (this.op != undefined && this.bits != undefined && this.qtd_ops > 0) {
            return true;
        }
        return false;
    }
    start() {
        this.trace = [];
        this.index_compare = 1;
        this.control["next1"] = false;
        let sim = new _ap__WEBPACK_IMPORTED_MODULE_3__["Simulator"](this.operands, +this.bits, +this.qtd_ops);
        switch (this.op) {
            case "Add":
                sim.add();
                this.trace = sim.trace;
                this.trace_i = this.trace[0];
                this.control["next1"] = true;
                break;
            default:
                break;
        }
    }
    next_compare() {
        console.log(this.trace.length, this.index_compare);
        if (this.trace.length > 0) {
            if (this.trace.length > this.index_compare) {
                this.index_compare++;
                this.trace_i = this.trace[this.index_compare - 1];
            }
        }
    }
    back_compare() {
        console.log(this.trace.length, this.index_compare);
        if (this.trace.length > 0) {
            if (this.index_compare > 1) {
                this.index_compare--;
                this.trace_i = this.trace[this.index_compare - 1];
            }
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _simulator_service__WEBPACK_IMPORTED_MODULE_2__["SimulatorService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _dialog_detailed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog-detailed */ "./src/app/dialog-detailed.ts");
/* harmony import */ var _dialog_detailed_rv__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dialog-detailed-rv */ "./src/app/dialog-detailed-rv.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _dialog_detailed__WEBPACK_IMPORTED_MODULE_18__["DialogOverviewDetailed"],
            _dialog_detailed_rv__WEBPACK_IMPORTED_MODULE_19__["DialogOverviewDetailedRV"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"]
        ],
        providers: [],
        entryComponents: [_dialog_detailed__WEBPACK_IMPORTED_MODULE_18__["DialogOverviewDetailed"], _dialog_detailed_rv__WEBPACK_IMPORTED_MODULE_19__["DialogOverviewDetailedRV"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dialog-detailed-rv.ts":
/*!***************************************!*\
  !*** ./src/app/dialog-detailed-rv.ts ***!
  \***************************************/
/*! exports provided: DialogOverviewDetailedRV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewDetailedRV", function() { return DialogOverviewDetailedRV; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogOverviewDetailedRV = class DialogOverviewDetailedRV {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onClick() {
        return true;
    }
};
DialogOverviewDetailedRV.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewDetailedRV = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-detailed-rv',
        template: __webpack_require__(/*! raw-loader!./dialog-detailed-rv.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-detailed-rv.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogOverviewDetailedRV);



/***/ }),

/***/ "./src/app/dialog-detailed.ts":
/*!************************************!*\
  !*** ./src/app/dialog-detailed.ts ***!
  \************************************/
/*! exports provided: DialogOverviewDetailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewDetailed", function() { return DialogOverviewDetailed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogOverviewDetailed = class DialogOverviewDetailed {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onClick() {
        return true;
    }
};
DialogOverviewDetailed.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewDetailed = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-detailed',
        template: __webpack_require__(/*! raw-loader!./dialog-detailed.html */ "./node_modules/raw-loader/index.js!./src/app/dialog-detailed.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogOverviewDetailed);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _simulator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../simulator.service */ "./src/app/simulator.service.ts");



let HomeComponent = class HomeComponent {
    constructor(sim_service) {
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _simulator_service__WEBPACK_IMPORTED_MODULE_2__["SimulatorService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/simulator.service.ts":
/*!**************************************!*\
  !*** ./src/app/simulator.service.ts ***!
  \**************************************/
/*! exports provided: SimulatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorService", function() { return SimulatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SimulatorService = class SimulatorService {
    constructor() {
    }
};
SimulatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SimulatorService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jonathas/github_pages/web-ap/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map