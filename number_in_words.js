function numberToWords(number) {
  // Your code here

  let dict = ['',
    'satu', 'dua', 'tiga', 'empat', 'lima',
    'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']


  if (number < 12) {
    return dict[number]
  } else if (number < 20) {
    return `${numberToWords(number - 10)} belas`
  } else if (number < 100) {
    return `${numberToWords(Math.floor(number / 10))} puluh ${numberToWords(number % 10)}`
  } else if (number < 200) {
    return `seratus ${numberToWords(number % 100)}`
  } else if (number < 1000) {
    return `${numberToWords(Math.floor(number / 100))} ratus ${numberToWords(number % 100)}`
  } else if (number < 2000) {
    return `seribu ${numberToWords(number % 1000)}`
  } else {

    let more = {

      'trilyun': 1000000000000,
      'milyar': 1000000000,
      'juta': 1000000,
      'ribu': 1000,
      'ratus': 100,
      'puluh': 10
    };


    for (let key in more) {

      if (number >= more[key]) {
        return `${numberToWords(Math.floor(number / more[key]))} ${key} ${numberToWords(number % more[key])}`
      }
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

console.log(numberToWords(742148217471));
