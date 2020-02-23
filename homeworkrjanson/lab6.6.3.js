// let human = {
//     name: "Jane"
//     age: 32
//     home: "Ban P Tle"
//     IsSingle: false
//     intelligent: 10
// }
// console.log(human)

// let key = +prompt (Please insert your key)
// let value = +prompt (Please insert your value)

// let object () {

// 
let obj = {};
// let key;
// let value;

while (key !== "stop" || value !== "stop") {
    key = prompt("Insert key");
    if (key === "stop") {
        break;
    }
    value = prompt("Insert Value");
    if (value === "stop") {
        break;
    }
    obj[key] = value;
  }

  console.log(obj);
