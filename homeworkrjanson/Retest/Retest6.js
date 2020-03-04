// ให้เขียนโปรแกรมที่หาผลลัพธ์ของ 1x2 + 2x3 + 3x4 + … + 87x88 แล้ว 
// alert ผลลัพธ์ออกมา


let sum = 0;
for (i = 1; i <= 87; i = i++) {
    sum = (sum * i + 1);
}
alert(sum);
console.log(sum)