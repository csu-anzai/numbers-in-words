function numberToWords(number) {

  let word = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  number = Math.floor(number)
  if (number < 20) {
    return number <= 11 ? word[number] : word[number % 10] + ' belas '
  }
  else if (number < 200) {
    return number < 100 ? numberToWords(number / 10) + ' puluh ' + numberToWords(number % 10) : 'seratus ' + numberToWords(number % 100);
  }
  else if (number < 2e3) {
    return number < 1e3 ? numberToWords(number / 100) + ' ratus ' + numberToWords(number % 100) : 'seribu ' + numberToWords(number % 1000)
  }
  else {
    let num = [1e6, 1e9, 1e12, 1e15]
    let word = [' ribu ', ' juta ', ' milyar ', ' triliun ',]
    for (let i = 0; i < num.length; i++) {
      if (number < num[i]) {
        return numberToWords(number / (num[i] / 1e3)) + word[i] + numberToWords(number % (num[i] / 1e3))
      }
    }
  }

}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(20118023480445));
console.log(numberToWords(999999999999999));