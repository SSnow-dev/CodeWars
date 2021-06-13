// Task
// You will be given an array of numbers. 
// You have to sort the odd numbers in ascending order while leaving 
// the even numbers at their original positions.

console.log(sortArray([7,1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

function sortArray(array) {
  //use the sorted odd numbers as base for final array
  sortedArray = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  //store even numbers.
  evenNums = array.filter(num => num % 2 == 0);
  evenNumsIndex = [];

  //store index of the even numbers
  array.forEach((num, index) => {
    if (num % 2 === 0) {
      evenNumsIndex.push(index);
    }
  });

  
  //insert even numbers back into original index
  if (evenNumsIndex.length > 0) {
    evenNumsIndex.forEach((num, index) => {
      sortedArray.splice(num, 0, evenNums[index])
    });
  };

  return sortedArray;
}