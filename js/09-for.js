console.clear();

/*
FOR - loop, ciklas
*/

const marks = [10, 2, 8, 4 ,6];
let sum = 0;
let index = 0;

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

sum += marks[index++];
console.log('Suma:', sum);

const count = marks.length;

const average = sum / count;
console.log('Vidurikis:', average);