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

const sk = 1;
console.log(daugyba(3));