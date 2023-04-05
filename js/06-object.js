console.clear();
/*
OBJECT - objektas; galima pritempti: setas, zodynas.
*/
const emptyObject = {};
console.log(emptyObject);

const user = {
    'name': 'Petras',
    'age': 99,
    'isMarried': true,
    'mano pazymiai':[10, 9, 8],
};
console.log(user);

// Sveiki, as esu [vardas] ir man yra [kazkiek] metu.

const sayHi = `Sveiki, as esu ${user['name']} ir man yra ${user['age']} metu.`;
console.log(sayHi);

const sayHi2 = `Sveiki, as esu ${user.name} ir man yra ${user.age} metu.`;
console.log(sayHi);

console.log(user.isMarried);
console.log(user['mano, pazymiai']);

console.log('---------');

let a = ['a'];
a[0] = 'aaa';
console.log(a);

let gg = {
    goodGame: false,
}
console.log(gg);

gg.goodGame = true;
console.log(gg);

gg = {};
console.log(gg);

console.clear();

const person = {
    non: 'grata',
    age: Infinity,
    name: 'nesakysiu',
    luckyNumbers: [2, 6, 13, 666, 74],
}

console.log(person);
console.log('Laimingu skaiciu kiekis:', person.luckyNumbers.length);
console.log('Pirmas laimingas skaicius:', person.luckyNumbers[0]);

console.log('Vardo ilgis:', person.name.length);

console.log([10, 2, 8].length);
console.log('labas'.length);

const abc = {
    a: 'Aa',
    b: 'Bb',
    c: 'Cc',
}

console.log(abc);

const abcKeys = Object.keys(abc);
console.log(abcKeys);
console.log(Object.keys(abc).length);

