console.clear();

/*1. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
padidinamas vienetu ir gražinamas rezultatas

TEST:
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2
*/

function addition(a,b) {
    let suma = 0;
    suma = a + b;
    return suma;
}
const a = 0;
const b = 1;
console.log(`-> ${(a  + b)}`);

const c =9;
const d = 1;
console.log(`-> ${(c+d)}`);

const e = -3;
const f = -1;
console.log(`-> ${(e-f)}`);