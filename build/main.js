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
    return typeof a == Number ? a * 2 : +(a + 2);
}
//# sourceMappingURL=main.js.map