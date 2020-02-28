//ให้รับค่าจาก prompt มาเรื่อย ๆ จนกระทั่ง เจอคำว่า stop แล้วให้แสดงตัวเลขที่น้อยที่สุดออกมา

let max = Infinity
while (true) {
    let input = Number(prompt("Please insert number If you want to exit must type stop"));
    if (input < max) {
        min =  
        }

}
alert()


let max = Infinity;
let min = Infinity;
let input = Infinity;

// input = Number(prompt('Enter a number'));
while (input) {
    input = Number(prompt("Enter number"));
    if (input < min) {
        min = input;
    }
    else if (input > max) {
        input = max;
    }

    else (input === "stop"); {

    }
    break;
}

alert(min)

