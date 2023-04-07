console.clear();

/*1. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
padidinamas vienetu ir gražinamas rezultatas

TEST:
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2
*/

function addition(a,b) {
    return a + b;
}
const sk = 1;


/*2. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos) 
ir  konvertuotų valandos į sekundes, bei gražintų rezultatą

TEST:
howManySeconds(2) ➞ 7200
howManySeconds(10) ➞ 36000
howManySeconds(24) ➞ 86400
*/

function konvertavimas(valandos) {
    sekundes = valandos *60 *60;
    return sekundes;
}
const val = 2;
const x = konvertavimas(val);
console.log(x);

function konvertavimas(valandos) {
    sekundes = valandos *60 *60;
    return sekundes;
}
const val2 = 10;
const y = konvertavimas(val2);
console.log(y);

function konvertavimas(valandos) {
    sekundes = valandos *60 *60;
    return sekundes;
}
const val3 = 24;
const z = konvertavimas(val3);
console.log(z);

/*3. Parašyti f-ją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, 
antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. 
Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių. 


TEST:
basketballPoints(5, 25, 10) ➞ 85
basketballPoints(1, 1, 1) ➞ 6
basketballPoints(10, 20, 5) ➞ 6
*/

function taskai (baudos, dvitaskiai, tritaskiai) {
    let suma = 0;
    suma = baudos + (dvitaskiai * 2) + (tritaskiai * 3);
    return suma;
}

const a = 5; //baudos
const b = 25; //dvitaskiai
const c = 10; //tritaskiai
console.log(`-> ${taskai(a,b,c)}`);

function taskai (baudos, dvitaskiai, tritaskiai) {
    let suma = 0;
    suma = baudos + (dvitaskiai * 2) + (tritaskiai * 3);
    return suma;
}

const d = 1; //baudos
const e = 1; //dvitaskiai
const f = 1; //tritaskiai
console.log(`-> ${taskai(d,e,f)}`);



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
const b2 = 8;
console.log(`Ar ${a1} yra lygu ${b2} ${palyginimas(a1,b2)}`);


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
    if(sk1>sk2){
        return skai1+" skaicius didesnis";
    }else if (sk1 === sk2){
        return skai1+ 'lygu'+skai2;
    }else {
        return skai2+"skaicius didesnis";
    }
}

const skai1 = 10;
const skai2 = 20;
console.log(palyginti(skai1,skai2));


/*7. Parašyti f-ją, kuri atspausdintų paduodamo skaičiaus daugybos lentelę 

TEST:
Multiplication(3) ➞

1 * 3 = 3
2 * 3 = 6
3 * 3 = 9
Ir t.t.iki
10 * 3 = 30
*/

console.clear();

function daugyba (x){
    let rez= '';
    for(let i = 1; i<=10; i=i+1){
        rez=rez+i+'*'+ x + '=' + (x*i)+'\n \r'
    }
    return rez;
}

console.log(daugyba(3));



function addition(a,b) {
    return a + b;
}
const sk = 1;
