/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

let createInitialsFromName = (name) => {
  // Split the name into an array of words
  let words = name.trim().split(" ");

  // Handle different cases based on the number of words
  if (words.length === 1) {
    // Single-worded name, return the first two letters
    return words[0].substring(0, 2).toUpperCase();
  } else if (words.length === 2) {
    // Two-worded name, return the first letter of each word
    return (words[0][0] + words[1][0]).toUpperCase();
  } else {
    // Name with more than two words, return the first letter of the first word and the first letter of the last word
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
};

module.exports = createInitialsFromName;
