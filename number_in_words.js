function numberToWords(number) {
  var kamus = {
    1: 'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan',
    10: 'sepuluh',
    11: 'sebelas'
  };
  var key = Object.keys(kamus);

  if (number <= 11) {
    return kamus[number];
  } else if (number >= 12 && number <= 19) {
    return `${kamus[number % 10]} belas`;
  } else if (number >= 20 && number <= 99) {
    if (number % 10 === 0) {
      return `${kamus[Math.floor(number / 10)]} puluh `;
    } else {
      return `${kamus[Math.floor(number / 10)]} puluh ` + numberToWords(number % 10);
    }
  } else if (number >= 100 && number <= 199) {
    if (number % 100 === 0) {
      return `seratus`;
    } else {
      return `seratus ` + numberToWords(number % 100);
    }
  } else if (number >= 200 && number <= 999) {
    if (number % 100 === 0) {
      return `${kamus[Math.floor(number / 100)]} ratus`;
    } else {
      return `${kamus[Math.floor(number / 100)]} ratus ` + numberToWords(number % 100);
    }
  } else if (number >= 1000 && number < 1999) {
    if (number % 1000 === 0) {
      return `seribu`;
    } else {
      return `seribu ` + numberToWords(number % 1000);
    }
  } else if (number >= 2000 && number <= 9999) {
    if (number % 1000 === 0) {
      return `${kamus[Math.floor(number / 1000)]} ribu`;
    } else {
      return `${kamus[Math.floor(number / 1000)]} ribu ` + numberToWords(number % 1000);
    }
  } else if (number >= 10000 && number <= 19999) {
    if (number % 10000 === 0) {
      return `sepuluh ribu `;
    } else {
      return `${kamus[Math.floor(number / 1000)]} ribu ` + numberToWords(number % 10000);
    }
  }
}

// Driver code
console.log(numberToWords(12000)); //tujuh ratus lima
// console.log(numberToWords(1000000)); //satu juta
// console.log(numberToWords(2011845)); //dua juta sebelas ribu delapan ratus empat puluh lima
