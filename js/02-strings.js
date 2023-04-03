console.clear();

/*
Strings - simboliu sarasas/junginys, tekstas ->paragrafai ->sakiniu ->zodziu


Kintamuju iniciavimas:
-const (default)
-let (tik jei yra poreikis keist reiksme)
-var (nenaudoti, nebent TIKRAI zinote ka darote)

Sting'o iniciavimas:
-viengubos kabutes
-dvigubos kabutes
-backtick kabutes

*/
// KINTAMUJU INICIAVIMAS

const vardas = 'Petras';
console.log(vardas);

const keturi = 4;
console.log(keturi);

const keturitekstu = '4';
console.log(keturitekstu);

console.log('Labas');
console.log('Labas rytas');

pinigine = 5;
console.log(pinigine);

//Strings

const firstname = 'Maryte';
console.log(firstname);

const lastname = 'Marytaite';
console.log(lastname);

//Labas rytas, Maryte!

console.log('Labas rytas, Maryte!')

console.log('Labas rytas,', firstname)

console.log('Labas rytas,', firstname, '!');

const pasisveikinimas = 'Labas rytas, ' + firstname + '!';
console.log(pasisveikinimas);

//string + string
//numger + number
//string + number
//number + string
// Sveiki, mano vardas Jonas ir man 88 metai!

/*const name1 = 'Jonas';
const age1 = 88;

const prisistatymas = 'Sveiki, mano vardas ' + name1 + ' ir man ' + age1 + ' metai!';
console.log(prisistatymas);

//81 / 3 -> 27

const x = '4';
const y = 5;

console.log(x + y);

console.log(x - y);

console.log(x / y);

console.log(x * y);*/

//Pirmas uzdavinys :

console.clear;

const x = 1;
const y = 2;
const z = 3;

console.log (x + y + z);
console.log (x - y - z);
console.log (x * y * z);
console.log (x / y / z);

//Antras uzdavinys :

const name1 = "Jonas ";
const name2 = "Jonaitis ";
const name3 = "Jonauskas";

console.log (name1 + name2 + name3);

//Antra paskaita :

console.clear();

// Sveiki, Domas!

const username1 = 'Jonas';
const username2 = 'Maryte';
const username3 = 'Petras';
const username4 = 'Ona';

const hi1 = 'Sveiki, ' + username1 + '!';
const hi2 = 'Sveiki, ' + username2 + '!';
const hi3 = 'Sveiki, ' + username3 + '!';
const hi4 = 'Sveiki, ' + username4 + '!';

console.log(hi1);
console.log(hi2);
console.log(hi3);
console.log(hi4);

// Vienguba (') kabute.

const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

// Dviguba (") kabute.

const kabute2 = 'Dviguba (") kabute.';
console.log(kabute2);

// Vienguba (') ir Dviguba (") kabutes.

const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute12_1);

const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute12_2);

const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute12_3);

//Backtick kabutes (`) : 

const kabute3 = `Viengube (') ir dviguba (") kabutes.`;
console.log(kabute3);

// Kabutes : '"`.


// Simboliai : \n, \r , \t



// \n\ stulpelio pabaigoje yra naudojamas, noredamas isgauti nauja eilute.


// \n\r\


// Your lucky number is 7. Congz !

const userNumber = 777;
console.log(`Your lucky number is ${userNumber}. Congz!`);

const vardenis = 'vardenis';
const amzius = 99;

console.log(`Sveiki, mano vardas ${vardenis} ir man ${amzius} metu.`);






