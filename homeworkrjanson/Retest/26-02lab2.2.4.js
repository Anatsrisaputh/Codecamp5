// 2.11.  แบบฝึกหัด
// เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม 
// แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
}
console.log(ucFirst("mr.jane"));  
