const CYPHER_KEY = {
  1:["I", "l"],
  2:["R", "z"],
  3:["E", "e"],
  4:["A", "a"],
  5:["S", "s"],
  6:["G", "b"],
  7:["T", "t"],
  8:["B"],
  9:["g"],
  0:["O", "o"]
};
Object.freeze(CYPHER_KEY);
let cypherKeyEntries = Object.entries(CYPHER_KEY);

let test1 = "Hello World";
let test2 = "I am your father";
let test3 = "I do not know what else I can test. Be cool. Good luck";


console.log(cypher(test1));
console.log(cypher(test2));
console.log(cypher(test3));

// function cypher(string) {
//   let finalString = '';
//   string.split(' ').forEach(word => {
//     word.split('').forEach(char => {
//       for(let i = 0; i < cypherKeyEntries.length; i++) {
//         if (cypherKeyEntries[i][1].includes(char)) {
//           finalString += cypherKeyEntries[i][0];
//         } else {
//           finalString += char;
//         }
//       }
//     });
//   });
//   return finalString;
// }

function cypher(string) {
  let finalString = '';
  let charArray = string.split("").map(char => {
    for(let i = 0; i < cypherKeyEntries.length; i++) {
      if (cypherKeyEntries[i][1].includes(char)) {
        return cypherKeyEntries[i][0];
      }
    }
    return char;
  });
  return charArray.join("");
}

// for(let i = 0; i < cypherKeyEntries.length; i++) {
//   if (cypherKeyEntries[i][1].includes(char)) {
//     finalString += cypherKeyEntries[i][0];
//   } else {
//     finalString += char;
//   }
// }