function palindrome(str) {
  const alphaNumOnly = str
    .toLowerCase()
    .match(/[a-z0-9]/g);
  return alphaNumOnly.join('') === alphaNumOnly.reverse().join('');
}

palindrome('eye');
