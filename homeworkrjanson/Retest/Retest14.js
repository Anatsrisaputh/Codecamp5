let arr = [];
let input = Infinity;
let sum = 0;

while (input) {
    input = +prompt('Enter a number');
    if (Number.isInteger(input) === true) {
        arr.push(input);
    } 
}

for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
sum = sum / arr.length;
console.log(sum);