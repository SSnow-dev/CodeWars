const FILE_TYPE = /\.\w+$/g;

files = [
  'Lakey - Better days.mp3', 
  'Wheathan - Superlove.wav', 
  'groovy jam.als', 
  '#4 final mixdown.als', 
  'album cover.ps', 
  'good nights.mp3'
];

files2 = [
  'Lakey - Better days.mp3', 
  'Fisher - Stop it.mp3', 
  'Fisher - Losing it.mp3', 
  '#4 final mixdown.als', 
  'album cover.ps', 
  'good nights.mp3'
];

// let fileType = files2[0].match(FILE_TYPE);
// console.log(fileType);

console.log(mostUsedFileType(files2));
console.log(mostUsedFileType(files));

function mostUsedFileType(files) {
  const fileTypeCount = {};
  files.forEach(file => {
    let fileType = file.match(FILE_TYPE);
    // if (!fileTypeCount.hasOwnProperty(fileType)) {
    //   fileTypeCount[fileType] = 1;
    // } else {
    //   fileTypeCount[fileType]++;
    // }
    !fileTypeCount.hasOwnProperty(fileType) ? fileTypeCount[fileType] = 1 : fileTypeCount[fileType]++;
  });
  return highestValues(fileTypeCount).sort();
}

function highestValues(obj) {
  let entries = Object.entries(obj);
  let highestValue = -Infinity;
  let highestValues = [];

  entries.forEach(entry => {
    if (entry[1] > highestValue) highestValue = entry[1];
  });
  entries.forEach(entry => {
    if (entry[1] === highestValue) highestValues.push(entry[0])
  });
  return highestValues;
}