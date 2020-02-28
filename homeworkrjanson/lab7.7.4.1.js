// 7.4.  แบบฝึกหัด
// 1.สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator
// โดยต้องมี 3 Methods นี้
// a.read(): รับค่าจาก propmt สองตัว
// b.sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
// c.mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว


function Calculator(num1, num2) {
    this.x = num1;
    this.y = num2;

    this.read = function() {
        this.x = +prompt("First Num");
        this.y = +prompt("Second Num");
    };
    this.sum = function() {
        let total = this.x + this.y;
        alert("Summary ="+ total);
    }
    this.mul = function() {
        let totalmul = this.x * this.y;
        
    }
}



