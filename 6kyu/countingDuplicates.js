console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabb556111cde"));
console.log(duplicateCount("aAbB556111cde"));

function duplicateCount(text) {
  let charCount = {};
  for (let i = 0; i < text.length; i++) {
    if (!charCount[text[i].toLowerCase()]) {
      charCount[text[i].toLowerCase()] = 1;
    } else {
      charCount[text[i].toLowerCase()]++;
    }
  }

  let values = Object.values(charCount);
  let duplicateCount = 0;

  values.forEach(value => {
    if (value > 1) {
      duplicateCount++;
    }
  });
  return duplicateCount;
}