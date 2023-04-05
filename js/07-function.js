console.clear();

/*

*/

const kursas = 1.5;
const konvertavimoMokestis = 1;

const pinigine1 = 2;
const pinigine2 = 4;
const pinigine3 = 100;

const verte1 = pinigine1 * kursas - konvertavimoMokestis;
const verte2 = pinigine2 * kursas - konvertavimoMokestis;
const verte3 = pinigine3 * kursas - konvertavimoMokestis;

console.log(verte1);
console.log(verte2);
console.log(verte3);

console.log('------------');

function converMyMoney(sumaEurais) {
    console.log('Bankas gavo:',sumaEurais);
    const convertionRate = 1.5;
    const tax = 1;
    return sumaEurais * convertionRate - tax;
}

const dollers1 = converMyMoney(pinigine1);
const dollers2 = converMyMoney(pinigine2);
const dollers3 = converMyMoney(pinigine3);

console.log('Po konvertavimo:', pinigine1, '->', dollers1);
console.log('Po konvertavimo:', pinigine2, '->', dollers2);
console.log('Po konvertavimo:', pinigine3, '->', dollers3);

console.log(converMyMoney(1));
console.log(converMyMoney(2));
console.log(converMyMoney(200));

console.log('-----------');

function sum(a, b) {
    return a + b;
}

console.log(sum(7, 5));
console.log(sum(-7, 5));
console.log(sum(-7, -5));
console.log(sum(0, 0));
console.log(sum(3.14, 3.14));

console.clear();

function hi () {
    return 'Labas';
}

console.log(hi());
