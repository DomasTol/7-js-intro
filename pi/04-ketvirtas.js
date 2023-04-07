/*4. Parašyti f-ją, kuriai būtų paduodami du parametrai (skaičiai), ir f-ja gražintų true  jei dviejų skaičių
sumą yra mažiau arba lygų 100 ir false jei daugiau už 100. 

TEST:
lessThan100(22, 15) ➞ true
lessThan100(83, 34) ➞ false
lessThan100(3, 77) ➞ true
*/

function palyginimas (a,b) {
    const suma = a + b;
    if (suma <= 100) {
    return true; 
    } else {
        return false;
    }
}

const sk1 = 22;
const sk2 = 15;
console.log(palyginimas  (sk1, sk2));

const sk3 = 83;
const sk4 = 34;
console.log(palyginimas (sk3, sk4));

const sk5 = 3;
const sk6 = 77;
console.log(palyginimas (sk5, sk6));