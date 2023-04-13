console.clear();

for (let i=0; i < 5; i++) {
    console.log(i);

}

console.log('----------');
for (let i = 0; i < 5; i+=2) {
    console.log(i);
}


console.log('------------');
for (let i = 0, j = 20; i < 10 && j > 0; i++, j -= 3) {
    console.log(i,j);
}

console.log('------------');
function arTesti(iteratorCount) {
    return iteratorCount < 5;
    }

for (let i = 0; arTesti(i); i++) {
    console.log(i);
}

const marks = [10, 2, 8, 4, 6];

//FOR
let forSum = 0;
for (let i=0; i<marks.length; i++) {
    const mark = marks[i];
    forSum += mark
}
console.log('for:', forSum);

//FOR-Of
let forOfSum = 0;
for (const mark of marks) {
    forOfSum +=mark;
}
console.log('for-of:', forOfSum);


//WHILE
let whileSum = 0;
let iWhile = 0;
while(iWhile < marks.length) {
    const mark = marks[iWhile];
    whileSum += mark;
    iWhile++;
}
console.log('while:', whileSum);

//DO-WHILE
let doWhileSum = 0;
let iDoWhile = 0;
do {
    const mark = marks[iDoWhile];
    doWhileSum += mark;
    iDoWhile++;
}while (iDoWhile < marks.length);
console.log('do-while:', doWhileSum);

//FOREACH
let forEachSum = 0;
marks.forEach((mark) => {
    forEachSum +=mark; 
});
console.log('foreach:', forEachSum);

//MAP - grazina analogiska masyva
const marks2x = [];
for (const mark of marks) {
    marks2x.push(mark * 2);
}
console.log(marks);
console.log(marks2x);

const marks2xMap = marks.map(function (mark){
    return mark * 2;
});
console.log(marks2xMap);
/* paprastesnis uzrasymas
const marks2xMap = marks.map(m => m *2);
console.log(marks2xMap);
*/

//FILTER - palieka tik tai ko nori
const studentMarks = [10, 2, -7, 8, -5, 4, 6];
const filteredMarks = studentMarks.filter(m => m >= 1 && m <= 10);
console.log(studentMarks);
console.log(filteredMarks);

//REDUCE - subendrinti rezultada pagal pateikta logika
const reducedSum = marks
    .reduce((t, m) => t + m);  //t - tottal, m - mark
console.log('reduce:', reducedSum);

const reducedSum2 = marks
    .reduce((t, m) => t + m, 0); 
console.log('reduce2:', reducedSum2);


const reduce1 = [2, 4, 8, 16].reduce((t, n) => t+ n);
console.log('1:', reduce1);

const reduce2 = [2, 4, 8, 16].reduce((t, n) => t+ n);
console.log('2:', reduce2);

const reduce3 = [2, 4, 8, 16].reduce((t, n) => t+ n, 100);
console.log('3:', reduce3);

const reduce4 = [2, 4, 8, 16].reduce((t, n) => t+ n, -100);
console.log('4:', reduce4);

const reduce5 = [2, 4, 8, 16].reduce((t, n) => t- n);
console.log('5:', reduce5); 

const reduce6 = [2, 4, 8, 16].reduce((t, n) => t- n, 0);
console.log('6:', reduce6); 

const reduce7 = [2, 4, 8, 16].reduce((t, n) => t* n);
console.log('7:', reduce7); 

const reduce8 = [2, 4, 8, 16].reduce((t, n) => t/ n);
console.log('8:', reduce8);

const reduce9 = [2, 4, 8, 16].reduce((t, n) => t % n);
console.log('9:', reduce9); //issiaiskinti su procentais

//SORT
marks.sort();
console.log(marks);

marks.sort((a, b) => a - b);
console.log(marks);

//VIDURKIS
const pazymiai = [10, 2, 'Petras', true, 8, -7, [], {}, undefined, NaN, Infinity, -Infinity, 4, 6, Math.E, Math.PI, 3.14, null, 0];

const tikriPazymiai = pazymiai
.filter(p => typeof p === 'number')
.filter(p => p > 0)
.filter(p => p <= 10)
.filter(p => p % 1 === 0)
const vidurkis = tikriPazymiai
.reduce((s, p) => s+p, 0) / tikriPazymiai.length;

console.log(tikriPazymiai);
console.log(vidurkis);