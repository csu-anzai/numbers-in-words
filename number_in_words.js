function numberToWords(number) {
  var output = '';
  var words = ['','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  
  while(number > 0) {
    if(number < 12) {
      output = output + words[number];
      number = 0;
    } else if(number < 20) {
      output = output + words[number%10] + ' belas';
      number = 0;
    } else if(number < 100) {
      output = output + words[Math.floor(number/10)] + ' puluh ';
      number = number % 10;
    } else if(number < 200) {
      output += 'seratus ';
      number = number - 100;
    } else if(number < 1000) {
      return output + numberToWords(Math.floor(number/100)) + ' ratus ' + numberToWords(number % 100);
    } else if(number < 10000) {
      if(Math.floor(number/1000) === 1) {
        output = output + 'seribu ';
      } else {
        output = output + words[Math.floor(number/1000)] + ' ribu ';
      }
      number = number % 1000;
    } else if(number < 1000000) {
      return output + numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number % 1000);
    } else if(number < 1000000000) {
      return output + numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number % 1000000);
    } else if(number < 1000000000000) {
      return output + numberToWords(Math.floor(number/1000000000)) + ' milyar ' + numberToWords(number % 1000000000);
    } else if(number < 1000000000000000) {
      return output + numberToWords(Math.floor(number/1000000000000)) + ' trilyun ' + numberToWords(number % 1000000000000);
    }
  }
  return output;
}

// Driver code
console.log(numberToWords(121));
console.log(numberToWords(15));
console.log(numberToWords(25));
console.log(numberToWords(924));
console.log(numberToWords(1924));
console.log(numberToWords(1111));
console.log(numberToWords(2222));
console.log(numberToWords(3003));
console.log(numberToWords(99024));
console.log(numberToWords(3000));
console.log(numberToWords(190000));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(999999999));
console.log(numberToWords(9999999999));
console.log(numberToWords(99999999999));
console.log(numberToWords(9999999999999));