ให้รับค่าจาก prompt มาเรื่อย ๆ จนกระทั่ง เจอคำว่า stop 
แล้วให้แสดงตัวเลขที่น้อยที่สุด และ มากที่สุดออกมา

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

console.log(min, max);