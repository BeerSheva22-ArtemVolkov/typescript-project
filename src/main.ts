import Rectangle from "./Rectangle";
import Shape from "./Shape";

const MAXLENGTH = 127;
const MINLENGTH = 32;

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

let comparator: (num1: number, num2: number) => number; //Синтаксис определения типа функции
comparator = function (str: number, num: number): number {
    return str - num;
}

type Comparator<T = number> = (p1: T, p2: T) => number; //T=number - дефолтное значение T, если не переназначать
let comp: Comparator<number> = function (num1: number, num2: number): number {
    return num1 > num2 ? 1 : -1;
}

type Person = { id: number, date: Date | string, name: string, gender?: "male" | "female" }; // ? - опциональное поле

function displayPerson(prs: Person): void {
    prs.gender && console.log(prs.gender.substring(0, 3));
}

displayPerson({ id: 123, date: "2000-10-10", name: "Pasha" })

function cipher(text: string, key: number): string {
    return Array.from(text).map(letter => {
        const charCode: number = letter.charCodeAt(0);
        const res = (charCode + key) % MAXLENGTH;
        return String.fromCharCode(res > MAXLENGTH ? MINLENGTH + res : res);
    }).join('');
}

function decipher(text: string, key: number): string {
    return Array.from(text).map(letter => {
        const charCode: number = letter.charCodeAt(0);
        const res = (charCode - key) % MINLENGTH;
        return String.fromCharCode(res < MINLENGTH ? MAXLENGTH + res : res);
    }).join('');
}

const res1 = cipher("abcde", 100)
const res2 = decipher("FGHIJ", 100);
console.log(res1, res2);

const shape: Rectangle = new Rectangle(3, 4);
// shape.width = 10; // не получится, нет сеттера
let width = shape.width;
let height = shape.height;
console.log(shape.perimeter());
console.log(shape.square());


