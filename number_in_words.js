function numberToWords(number) {
  // Your code here
  var str = '';
  var words = {
    11: 'sebelas',
    10: 'sepuluh',
    9: 'sembilan',
    8: 'delapan',
    7: 'tujuh',
    6: 'enam',
    5: 'lima',
    4: 'empat',
    3: 'tiga',
    2: 'dua',
    1: 'satu',
    0: 'nol',
  }
  var satuan = ['belas', 'puluh', 'ratus', 'ribu', 'juta', 'milyar', 'triliun'];
  var rangeSatuan = [20,      99,     999, 999999, 999999999, 999999999999, 999999999999999];

  if (isNaN(number) || number == 0) {
    return '';
  } else if (words[number]) {
    return words[number];
  }
  for (var i = 0; i < rangeSatuan.length; i++) {
    if (number <= rangeSatuan[i]) {
      if (i == 0) {
        str += numberToWords(number%10) + ' ' + satuan[i];
      } else if (i == 1) {
        if (number == 10) {
          str += 'sepuluh';
        } else {
          str += numberToWords(Math.floor(number/Math.pow(10, i))) + ' ' + satuan[i] + ' ' + numberToWords((number%Math.pow(10, i)));
        }
      } else if (i == 2) {
        if (number <= 199) {
          str += 'se' + satuan[i] + ' ' + numberToWords((number%Math.pow(10, i)));
        } else {
          str += numberToWords(Math.floor(number/Math.pow(10, i))) + ' ' + satuan[i] + ' ' + numberToWords((number%Math.pow(10, i)));
        }
      } else if (i == 3) {
        if (number <= 1999) {
          str += 'se' + satuan[i] + ' ' + numberToWords((number%Math.pow(10, i)));
        } else {
          str += numberToWords(Math.floor(number/Math.pow(10, i))) + ' ' + satuan[i] + ' ' + numberToWords((number%Math.pow(10, i)));
        }
      } else if (i == 4) {
        str += numberToWords(Math.floor(number/Math.pow(10, 6))) + ' ' + satuan[i] + ' ' + numberToWords((number%Math.pow(10, 6)));
      } else if (i == 5) {
        str += numberToWords(Math.floor(number/Math.pow(10, 9))) + ' ' + satuan[i] + ' ' + numberToWords((number%Math.pow(10, 9)));
      } else if (i == 6) {
        str += numberToWords(Math.floor(number/Math.pow(10, 12))) + ' ' + satuan[i] + ' ' + numberToWords((number%Math.pow(10, 12)));
      }
      break;
    }
    
  }
  return str;


  // 1223
  // numberToWords(1000) + sisa
  // dua ratus + numberToWords(23)
  // tiga ribu seratus dua puluh tiga
  // return numberToWords(8) + 'belas'
  // return numberToWords(2) + 'puluh' + numberToWords()

  
  // return hasil;
}

// Driver code

console.log(numberToWords(4));
console.log(numberToWords(11));
console.log(numberToWords(13));
console.log(numberToWords(27));
console.log(numberToWords(111));
console.log(numberToWords(18079));
console.log(numberToWords(82102713));

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

console.log('');

console.log(numberToWords(1));
console.log(numberToWords(11));
console.log(numberToWords(111));
console.log(numberToWords(1111));
console.log(numberToWords(11111));
console.log(numberToWords(111111));
console.log(numberToWords(1111111));
console.log(numberToWords(111111111111111));