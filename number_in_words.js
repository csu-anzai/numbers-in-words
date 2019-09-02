function numberToWords(number) {
  number = Math.floor(number);
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
  } else if (number < 100) {
    if (number % 10 === 0) {
      return numberToWords(number / 10) + ' puluh';
    } else {
      return numberToWords(number / 10) + ' puluh ' + numberToWords(number % 10);
    }
  } else if (number < 200) {
    if (number % 100 === 0) {
      return `seratus`;
    } else {
      return `seratus ` + numberToWords(number % 100);
    }
  } else if (number < 1000) {
    if (number % 100 === 0) {
      return numberToWords(number / 100) + ' ratus';
    } else {
      return numberToWords(number / 100) + ' ratus ' + numberToWords(number % 100);
    }
  } else if (number < 2000) {
    if (number % 1000 === 0) {
      return `seribu`;
    } else {
      return `seribu ` + numberToWords(number % 1000);
    }
  } else if (number < 1e6) {
    if (number % 1000 === 0) {
      return numberToWords(number / 1000) + ' ribu';
    } else {
      return numberToWords(number / 1000) + ' ribu ' + numberToWords(number % 1000);
    }
  } else if (number < 1e9) {
    if (number % 1e6 === 0) {
      return numberToWords(number / 1e6) + ' juta';
    } else {
      return numberToWords(number / 1e6) + ' juta ' + numberToWords(number % 1e6);
    }
  } else if (number < 1e12) {
    if (number % 1e9 === 0) {
      return numberToWords(number / 1e9) + ' milyar';
    } else {
      return numberToWords(number / 1e9) + ' milyar ' + numberToWords(number % 1e9);
    }
  } else if (number < 1e15) {
    if (number % 1e12 === 0) {
      return numberToWords(number / 1e12) + ' triliun';
    } else {
      return numberToWords(number / 1e12) + ' triliun ' + numberToWords(number % 1e12);
    }
  }
}

// Driver code
console.log(numberToWords(9999999999999)); //tujuh ratus lima
console.log(numberToWords(1000000)); //satu juta
console.log(numberToWords(2011845)); //dua juta sebelas ribu delapan ratus empat puluh lima
