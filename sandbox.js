function numberToWords(number) {
  let words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']

  let pecahan = {
    1000000000000: 'triliun',
    1000000000: 'milyar',
    1000000: 'juta',
    1000: 'ribu',
    100: 'ratus',
    10: 'puluh'
  }

  if (number < 12) {
    return words[number]
  } else if (number < 20) {
    if ((number - 10) === 0) {
      return 'belas'
    } else {
      return numberToWords(number - 10) + 'belas '
    }
  } else if (number < 200 && number >= 100) {
    if ((number - 100) === 0) {
      return 'seratus'
    } else {
      return 'seratus ' + numberToWords(number - 100)
    }
  } else {
    const key = Object.keys(pecahan)

    for (let i = key.length - 1; i >= 0; i--) {
      if (number >= key[i]) {
        let depan = ''
        let belakang = ''

        if (Math.floor(number / key[i]) === 0) {
          depan += ''
        } else {
          depan += numberToWords(Math.floor(number / key[i]))
        }

        if (number % key[i] === 0) {
          depan += ''
        } else {
          belakang += numberToWords(Math.floor(number % key[i]))
        }

        return `${depan} ${pecahan[key[i]]} ${belakang}`
      }
    }
  }
}


// Driver code
console.log(numberToWords(105))
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(29010))
console.log(numberToWords(230909023))
console.log(numberToWords(999999999999999))