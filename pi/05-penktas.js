/*5. Parašyti f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. Gražiname true arba false

TEST:
isSameNum(4, 8) ➞ false
isSameNum(2, 2) ➞  true
isSameNum(2, "2") ➞ false
*/

console.clear();

function palyginimas (x,y) {
    if(x === y) {
        return true;
    }else {
        return false;
    }
}

const a1 = 4;
const b1 = 8;
console.log(`Ar ${a1} yra lygu ${b1} ${palyginimas(a1,b1)}`);

const a2 = 2;
const b2 = 2;
console.log(`Ar ${a2} yra lygu ${b2} ${palyginimas(a2,b2)}`);

const a3 = 2;
const b3 = "2";
console.log(`Ar ${a3} yra lygu "${b3}" ${palyginimas(a3,b3)}`);

