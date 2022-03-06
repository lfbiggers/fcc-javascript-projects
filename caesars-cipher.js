//Define alphabet (uppercase only)
//Accumulate string (if/else spaces and punctuation pass through unaffected)
//Loop through string and shift 13 places in rotating alphabet
//Return newly accumulated string

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function rot13(str) {
  let answer="";
  for (let i=0; i < str.length; i++) {
    const letter = str[i];
  const isAlpha = alphabet.includes(letter);
  if (isAlpha === false) {
    answer += letter;
  } else {
    const alphaIndex = 
    alphabet.findIndex((c) => c === letter);
    answer += alphabet[alphaIndex + 13] ||
    alphabet[alphaIndex - 13];
  }
  }
  return answer;
  return str;
}


rot13("SERR PBQR PNZC");
