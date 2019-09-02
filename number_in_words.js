
function numberToWords(number) {
  // Your code here
  let words = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh ', 'sebelas ']
  
  number = Math.floor(number)
 
  let inWords = ''
  if (number < 12) {
    return words[number]
  } else if (number < 20) {
    return inWords + numberToWords(number - 10) +
      'belas '
  } else if (number < 100) {
    return inWords + numberToWords(number / 10) +
      'puluh ' + numberToWords(number % 10)
  } else if (number < 200) {
    return inWords + 'seratus ' + numberToWords(number - 100)
  } else if (number < 1000) {
    return inWords + numberToWords(number / 100) +
      'ratus ' + numberToWords(number % 100)
  } else if (number < 2000) {
    return inWords + 'seribu ' + numberToWords(number - 1000)
  } else if (number < 1000000) {
    return inWords + numberToWords(number / 1000) +
      'ribu ' + numberToWords(number % 1000) 
  } else if (number < 1000000000) {
    return inWords + numberToWords(number / 1000000) +
      'juta ' + numberToWords(number % 1000000)
  } else if (number < 1000000000000) {
    return inWords + numberToWords(number / 1000000000) +
      'milyar ' + numberToWords(number % 1000000000)
  } else if (number < 1000000000000000) {
    return inWords + numberToWords(number / 1000000000000) +
      'triliun ' + numberToWords(number % 1000000000000)
  }
  return inWords;
}



// Driver code
console.log(numberToWords(12));
console.log(numberToWords(1000000));
console.log(numberToWords(203))
console.log(numberToWords(2011845));
console.log(numberToWords(230909023))
console.log(numberToWords(999999999999999))