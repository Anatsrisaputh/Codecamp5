// ให้รับค่าจาก prompt ที่เป็น Number เข้ามา และให้ทำการสลับตัวเลขจากหลังไปหน้าและ
//  alert ค่านั้นออกมา ถ้าเป็นลบให้คงค่าลบนั้นไว้ด้วย
// -------------------
// INPUT
// -35
// OUTPUT
// -53
// -------------------------
// INPUT
// 542763
// OUPUT
// 367245
// -------------------------
// INPUT
// 520
// OUPUT
// 25
// -------------------------


let input = prompt('Enter a number');
input = input.split("").reverse().join("");

console.log(input);

if (input.includes("-")) {
    input = input.replace('-', '');
    console.log(input);
    input = input * -1;
}

console.log(input);