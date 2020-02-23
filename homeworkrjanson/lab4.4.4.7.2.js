/*
 4.7.  Computed Properties - แบบฝึกหัด
	2.	ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ 
    และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย 
    */


let obj = {}

while (true) {
    let key = prompt ("Fruits name"); {
        if (key === "stop" ) {
            break;
        }
    let value = prompt ("Quantity");
        if (value > 1) {
            key + "s";
            break;
        } 
        
        obj[key] = value;
    }
    console.log(obj)
}





