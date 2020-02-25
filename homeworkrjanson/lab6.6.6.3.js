// สร้าง object calculator จาก 3 methods นี้:
// read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
// sum() คืนค่าผลบวกของ 2 ค่านั้น.
// mul() คืนค่าผลคูณของ 2 ค่านั้น.



let calculator = {
    firstNum: 0,
    secondNum: 0,
    read() {
        this.firstNum = +prompt("Insert first number");
        this.secondNum = +prompt("Insert second number");
    },
    sum() {
        this.firstNum + this.secondNum;
        return [sum];
    },
    mul() {
        this.firstNum * this.secondNum;
        return [mul];
    }
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


x : +prompt("Insert first number"),
y : +prompt("Insert second number")