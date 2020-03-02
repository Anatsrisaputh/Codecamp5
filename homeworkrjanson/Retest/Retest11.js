  // 11 
  let min1 = Infinity;
  let min2 = Infinity;
  let min3 = Infinity;
  let input = Infinity;

  while (input) {
      input = +prompt('Enter a number');
      if (input < min1) {
          min3 = min2;
          min2 = min1;
          min1 = input;
      } else if (input < min2) {
          min3 = min2;
          min2 = input;
      } else if (input < min3) {
          min3 = input;
      }
      console.log(`min1: ${min1}, min2: ${min2}, min: ${min3}`);
  }
  console.log(min1, min2, min3);