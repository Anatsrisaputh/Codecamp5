let input = prompt('Enter a number');
input = input.split("").reverse().join("");

console.log(input);

if (input.includes("-")) {
    input = input.replace('-', '');
    console.log(input);
    input = input * -1;
}

console.log(input);