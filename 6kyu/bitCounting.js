console.log(countBits(0));
console.log(countBits(1));
console.log(countBits(2));
console.log(countBits(13));

function countBits(number) {
  if (number < 2) return number;

  let bitCount = 0;
  binaryNumber = number.toString(2);

  bitCount = binaryNumber.split('').reduce((accumulator, currentValue) => {
    return Number(accumulator) + Number(currentValue);
  }); 

  return bitCount;
}