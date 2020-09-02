function reverseWords(string) {
let wordsArr = string.split(' ');
let reverseWordArr = []
wordsArr.forEach(word => {
  let reversedWord = '';
  for(let i = word.length - 1;i >= 0; i--){
    reversedWord += word[i];
  }
  reverseWordArr.push(reversedWord)
})
return reverseWordArr.join(' ');
}

reverseWords('this is a string of words');