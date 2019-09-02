function numberToWords(number) {
  const kamus = [ 'nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas' ]
  let words = ''

  number = Math.floor(number)

  if (number < 12) {
    return kamus[number]
  } else if (number < 20) {
    return numberToWords(number % 10) + ' belas'
  } else if (number < 100) {
    if (number % 10 == 0) {
      return numberToWords(number / 10) + ' puluh'
    }
    return numberToWords(number / 10) + ' puluh ' + numberToWords(number % 10)
  } else if (number < 200) {
    return 'seratus ' + numberToWords(number % 100)
  } else if (number < 1000) {
    if (number % 100 == 0) {
      return numberToWords(number / 100) + ' ratus'
    }
      return numberToWords(number / 100) + ' ratus ' + numberToWords(number % 100)
  } else if (number < 2000) {
    if (number == 1000) return 'seribu'
    return 'seribu ' + numberToWords(number % 1000)
  } else if (number < 1000000) {
    if (number % 1000 == 0) {
      return numberToWords(number / 100) + ' ribu'
    }
    return numberToWords(number / 1000) + ' ribu ' + numberToWords(number % 1000)
  } else if (number < 1000000000) {
    if (number % 1000000 == 0) {
      return numberToWords(number / 1000000) + ' juta'
    }
    return numberToWords(number / 1000000) + ' juta ' + numberToWords(number % 1000000)
  } else if (number < 1000000000000) {
    if (number % 1000000000 == 0) {
      return numberToWords(number / 1000000000) + ' milyar'
    }
    return numberToWords(number / 1000000000) + ' milyar ' + numberToWords(number % 1000000000)
  } else if (number < 1000000000000000) {
    if (num % 1000000000000 === 0) {
      return numberToWords(number / 1000000000000) + ' triliun'
    }
    return numberToWords(number / 1000000000000) + ' triliun ' + numberToWords(num % 1000000000000)
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1001));
console.log(numberToWords(1000));
console.log(numberToWords(111));
console.log(numberToWords(1111));
console.log(numberToWords(11111));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
