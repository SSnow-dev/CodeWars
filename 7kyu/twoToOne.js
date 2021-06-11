
console.log(longest("aasfdsghev","eertyhdfgg"));

function longest(s1, s2) {
  let chars = [];

  for (let i = 0; i < s1.length; i++) {
    if (chars.includes(s1[i])) {
      continue;
    } else {
      chars.push(s1[i]);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (chars.includes(s2[i])) {
      continue;
    } else {
      chars.push(s2[i]);
    }
  }
  
  return chars.sort().join('');
}