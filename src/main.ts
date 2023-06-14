let n = 10;
n = 55.6;
let num: number = 12;
let n1: number | 'abc' = 12;
n1 = 100;
n1 = 'abc';
// n1 = 'aaa'; // не сработает
const ar: string[] = [];
ar.push('aa'); // можно добавить только строку
const ar1: [string, number] = ['abc', 10]; // оба типа обязательные
const ar2: [string, number?] = ['abc']; // number необязательный тип
ar1[0] = 'lnm';
ar1[1] = 1;
const ar3: Array<string> = [];
const map1: Map<string, number> = new Map([["abc", 40]])
console.log(map1.get("abc"));
console.log(map1.entries());
Array.from(map1.entries()).forEach(e => console.log(`${e[0]} -> ${e[1]}`))

function f(a: string | number): number {
    return typeof a == "number" ? a * 2 : +(a + 2);
}