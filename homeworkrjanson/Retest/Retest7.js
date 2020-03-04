// ให้เขียนโปรแกรมที่หาผลลัพธ์ของ 1x2x3 + 2x3x4 + 3x4x5 + … + 87x88x89 
// แล้ว alert ผลลัพธ์ออกมา

let output = 0;
for (i = 1; i <= 89; i++) {
  output = output + (i * (i + 1) * (i + 2));
}
alert(output);