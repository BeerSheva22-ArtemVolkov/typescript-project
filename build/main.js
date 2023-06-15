"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ShiftCipher_1 = __importDefault(require("./ShiftCipher"));
var sc = new ShiftCipher_1.default();
sc.updateKey();
var res1 = sc.cipher("abc");
console.log('res1 = ', res1);
var res2 = sc.decipher(res1);
console.log('res2 = ', res2);
sc.updateKey();
var res3 = sc.cipher("abc");
console.log('res3 = ', res3);
var res4 = sc.decipher(res3);
console.log('res4 = ', res4);
//# sourceMappingURL=main.js.map