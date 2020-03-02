let min = Infinity;
let max = - Infinity;
let input = Infinity;

while (input) {
    input = +prompt('Enter a number');
    if (input < min) {
        min = input;
    } else if (input > max) {
        max = input;
    }
    console.log(`min: ${min}, max: ${max}`);
}

input = max - min;
console.log(input);