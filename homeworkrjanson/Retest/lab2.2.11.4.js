// แบบฝึกหัด
// 4.เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) 
// โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar ให้เป็น number 
// ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้

function extractCurrencyValue(string, rate) {
    return Number((string).slice(1)) * rate;
}
alert( extractCurrencyValue('$100', 30) === 3000 );