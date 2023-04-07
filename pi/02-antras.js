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