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

//let i = 0;
// for (; ;) {
//  console.log(i++);    
// }

console.log('Start');

for (let i = 0; i < 5; i = i +1) {
    console.log('darau...', i);
}

console.log('FINISH');

//Praktinis pritaikymas:

console.clear();

const list = [9, 7, 1, 3];

console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);

for (let i=0; i < 4; i++) {
    console.log(i, '->', list[i]);
}

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let s = 0; s < students.length; s++) {
    console.log(`${s+1}) ${students[s]}`);
}

/*
1) Jonas;
2) Maryte;
3) Petras;
4) Ona.
*/

for (let s = 0; s < students.length; s++) {
    console.log(`${s+1}) ${students[s]}`);
}

for (let s = 0; s < students.length; s++) {
    if (s < students.length -1) {
        console.log(`${s+1}) ${students[s]};`);
    } else {
    console.log(`${s+1}) ${students[s]}.`);
    }
}    

console.clear();

const hi = 'labas';

for (let i=0; i<hi.length; i++) {
    console.log(i, '->', hi[i]);

}