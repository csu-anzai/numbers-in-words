var words = ['', 'puluh ', 'ratus ',];
var wordsThreeDigit = ['', 'ribu ', 'juta ', 'miliar ', 'triliun '];
var onesWords = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan '];

function numberToWords(number) {
  var arrThreeDigits = splitEveryThreeDigit(number);
  var result = '';
  for(var i = 0; i < arrThreeDigits.length; i++) {
      var wordsThreeDigitResult = threeDigitNumberToWords(arrThreeDigits[i]);
      if(wordsThreeDigitResult !== '') {
        //tangani seribu
        if(i === 1 && arrThreeDigits[i] === 1) {
          result = 'seribu ' + result;
        } else {
          result = threeDigitNumberToWords(arrThreeDigits[i]) + wordsThreeDigit[i] + result;
        }
      }
    }
  return result.substring(0, result.length - 1);
}

function splitEveryThreeDigit(number) {
  var strNum = String(number);
  var count = 0;
  var str = '';
  var result = [];
  for(var i = strNum.length - 1; i >= 0; i--) {
    str = strNum[i] + str;
    count++;
    if(count === 3 || i === 0) {
        result.push(Number(str));
        str = '';
        count = 0;
      }
    }
  return result;
}

function threeDigitNumberToWords(number) {
  var strNum = String(number);
  var countPosition = 0;
  var result = '';
  for(i = strNum.length - 1; i >= 0; i--) {
    if(strNum[i] !== '0') {
      // //tangani belasan
      if(countPosition === 1 && strNum[i] === '1' && strNum[i + 1] !== '0') {
        //tangani se
        if(strNum[i + 1] === '1'){
          result = 'sebelas ';
        } else {
          result = onesWords[strNum[i + 1]] + 'belas ';
        }
      } else {
        //tangani se
        if(strNum[i] === '1' && countPosition !== 0){
          result = 'se' + words[countPosition] + result;
        } else {
            result = onesWords[strNum[i]] + words[countPosition] + result;
        }
      }
    }
    countPosition++;
  }
  return result;
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
