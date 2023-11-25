function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}
// drawTriangle(7, '&');
let sum=0;
for (let i=1; i<=100; i++) {
    if (i%2) continue;
    sum+=i;
}
console.log(sum);

