const wordList = require("./word_list.js");

// DO NOT CHANGE ANY CODE ABOVE THIS LINE

console.log(wordList);

// Run this file by typing 'node advanced.js' in your terminal.

let firstThreeWords = wordList.slice(0,3);

let lastThreeWords = wordList.slice(-3);

let wordCount = wordList.length;

let twoLetterWords = wordList.filter((word) => word.length === 2);

let longestWord = wordList.toSorted((a, b) => a.length - b.length).slice(-1);

let containsC = wordList.filter((word) => word.includes('c'));

let reversedWords = wordList.map((word) => word.split("").reverse().join(""));

const regex1 = /\b[^aeiou]+\b/; // This matches words without vowels.

let noVowels = wordList.filter((word) => regex1.test(word));

const regex2 = /(\w).*\1/g; // This matches words with unique characters (i.e. no repeated characters).

let repeatedLetters = wordList.filter((word) => regex2.test(word));

