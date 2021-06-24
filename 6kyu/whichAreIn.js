a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

console.log(whichAreIn(a1, a2));

// function whichAreIn(array1, array2) {
//   return array1.filter(string => {
//     let subString = new RegExp(string);
//     for (let i = 0; i < array2.length; i++) {
//       if (array2[i].match(subString)) {
//         return true;
//       }
//     }
//     return false;
//   });
// }

function whichAreIn(array1, array2) {
  return array1.filter(string => {
    let subString = new RegExp(string);
    for (let str of array2) {
      if (str.match(subString)) {
        return true;
      }
    }
    return false;
  }).sort();
}