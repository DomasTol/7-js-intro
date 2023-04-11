/*6. Sukurti f-ją, kuri nustatytų, kuris iš paduodamų parametrų skaičių (n1, n2) yra didesnis. 
Jei n1 didesnis gražintų tekstą "n1 skaičius didesnis", jei "n2 skaičius didesnis", 
jei skaičiai lygūs gražintų n1 lygus n2. 

TEST:
comparisonNum(10, 20) ➞ "20 yra didesnis skaičius"
comparisonNum(2, -1) ➞  "2 yra didesnis skaičius"
comparisonNum(10, 10) ➞ "abu skaičiai lygūs"
*/

console.clear();

function palyginti (skai1, skai2){
    if(skai1>skai2){
        return `"${skai1} yra didesnis skaicius"`;
    }else if (skai1 === skai2){
        return'"abu skaiciai lygus"';
    }else {
        return skai2+" yra didesnis skaicius";
    }
}

const skai1 = 10;
const skai2 = 20;
console.log(palyginti(skai1,skai2));

const skai3 = 2;
const skai4 = -1;
console.log(palyginti(skai3,skai4));

const skai5 = 10;
const skai6 = 10;
console.log(palyginti(skai5,skai6));