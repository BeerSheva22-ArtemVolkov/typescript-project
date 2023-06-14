"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = __importDefault(require("./Rectangle"));
var MAXLENGTH = 127;
var MINLENGTH = 32;
var n = 10;
n = 55.6;
var num = 12;
var n1 = 12;
n1 = 100;
n1 = 'abc';
var ar = [];
ar.push('aa');
var ar1 = ['abc', 10];
var ar2 = ['abc'];
ar1[0] = 'lnm';
ar1[1] = 1;
var ar3 = [];
var map1 = new Map([["abc", 40]]);
console.log(map1.get("abc"));
console.log(map1.entries());
Array.from(map1.entries()).forEach(function (e) { return console.log("".concat(e[0], " -> ").concat(e[1])); });
function f(a) {
    return typeof a == "number" ? a * 2 : +(a + 2);
}
var comparator;
comparator = function (str, num) {
    return str - num;
};
var comp = function (num1, num2) {
    return num1 > num2 ? 1 : -1;
};
function displayPerson(prs) {
    prs.gender && console.log(prs.gender.substring(0, 3));
}
displayPerson({ id: 123, date: "2000-10-10", name: "Pasha" });
function cipher(text, key) {
    return Array.from(text).map(function (letter) {
        var charCode = letter.charCodeAt(0);
        var res = (charCode + key) % MAXLENGTH;
        return String.fromCharCode(res > MAXLENGTH ? MINLENGTH + res : res);
    }).join('');
}
function decipher(text, key) {
    return Array.from(text).map(function (letter) {
        var charCode = letter.charCodeAt(0);
        var res = (charCode - key) % MINLENGTH;
        return String.fromCharCode(res < MINLENGTH ? MAXLENGTH + res : res);
    }).join('');
}
var res1 = cipher("abcde", 100);
var res2 = decipher("FGHIJ", 100);
console.log(res1, res2);
var shape = new Rectangle_1.default(3, 4);
var width = shape.width;
var height = shape.height;
console.log(shape.perimeter());
console.log(shape.square());
//# sourceMappingURL=main.js.map