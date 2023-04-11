console.clear();

const pirmas = 7;
const antras = 5;

function sum(a, b) {
    return a + b;

}
console.log(`${pirmas} + ${antras} = ${sum(pirmas, antras)}`);

const diff = function (a,b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${diff(pirmas, antras)}`);

const div = (a, b) => {
    return a / b;
}
console.log(`${pirmas} / ${antras} = ${div(pirmas, antras)}`);

const multi = (a, b) => a * b;
console.log(`${pirmas} * ${antras} = ${multi(pirmas, antras)}`);


const square = (a) => a * a;
console.log(`${pirmas} ** 2 = ${square(pirmas)}`);

console.log('---------');

function hi () {
    return 'Labas!';
}
console.log(hi());

const hai = () => 'Labas!';
console.log(hai());

const student = name => `Hi, my name is ${name}!`;
console.log(student('Petras'));
console.log(student('Maryte'));
console.log(student('Eminem'));


console.log('--------------------');


function example() {
    return 'Example';
}

console.log(example());
console.log(example());



const sample = letter => `This is your sample: ${letter}`;

console.log(sample('A'));
console.log(sample('B'));
