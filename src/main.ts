import ShiftCipher from "./ShiftCipher";

let sc = new ShiftCipher();
sc.updateKey();
const res1 = sc.cipher("abc");
console.log('res1 = ', res1);
const res2 = sc.decipher(res1);
console.log('res2 = ', res2);  
sc.updateKey();
const res3 = sc.cipher("abc");
console.log('res3 = ', res3);
const res4 = sc.decipher(res3);
console.log('res4 = ', res4);  