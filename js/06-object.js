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

