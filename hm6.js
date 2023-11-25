//hm1
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
drawTriangle(7, '\\_/');

//hm2
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        sum += i;
    }
}

console.log("Сума чисел від 1 до 100 (не кратних 3): " + sum);

//hm3 
function pow(a,b) {
    let result=a;
    for (let i=1; i<b; i++) {
    result*= a;
    }
    return console.log(result);
}
pow(3,4);