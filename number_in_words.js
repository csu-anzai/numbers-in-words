function numberToWords(number) {
  // Your code here
  var str = '';
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var words = ['nol', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan '];
  var satuan = ['','puluh ', 'ratus ', 'ribu '];
  var x = 0;
  while (number > 0) {
    if (str) {
      words[1] = 'se';
    }
    for (var i = 0; i < numbers.length; i++) {
      if (number % 10 == 0) {
        number = Math.floor((number/10));
        x++;
        if (x == satuan.length) {
          x = 0;
        }
        break;
      }
      if (number % 10 == numbers[i]) {
        var temp = str;
        if (x == 1 && words[i] == 'se') {
          if (temp == 'satu ') {
            temp = 'se';
          }
          str = temp + 'belas'
        } else {
          str = words[i] + satuan[x] + temp;
        }
        number = Math.floor((number/10));
        x++;
        if (x == satuan.length) {
          x = 1;
        }
        break;
      }
    }
  }
  
  return str;
}

// Driver code

console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079));
// console.log(numberToWords(82102713));


console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
