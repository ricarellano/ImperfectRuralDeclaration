function isPalindrome(string) {
  string = string.toLowerCase();
  let characterArr = string.split('');
  let validCharacters = 'abcdefghijklmnñopqrstuvwxyz'.split('');

  let letterArr = [];
  characterArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1) letterArr.push(char);
  })

  if(letterArr.join('') === letterArr.reverse().join('')) return true; else return false;
}

isPalindrome('carro")