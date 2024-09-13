let isValidPassphrase = (text) => {
  let words = text.trim().split(/\s+/);

  let minimumFourWords = words.length >= 4;

  let minimumTwoCharsEach = words.every((word) => word.length >= 2);

  let conditionsSatisfied = minimumFourWords && minimumTwoCharsEach;

  return conditionsSatisfied;
};
function validatePassphrase() {
  const passphrase = document.getElementById("passphrase").value;
  const result = isValidPassphrase(passphrase);

  document.getElementById("result").innerText = result
    ? "Passphrase is valid."
    : "Passphrase is invalid.";
}

module.exports = isValidPassphrase;
