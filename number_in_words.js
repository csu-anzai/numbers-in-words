function numberToWords(number) {
  // Your code here
  number = Math.floor(number)
  // angka unik dan tidak berulang simpan dalam array standart
  var standart = ['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  for (var i=0; i<standart.length; i++) {
      if (number == i) return standart[i]
  }
  if (number < 20) return numberToWords(number - 10) + ' belas'
  if (number < 100) return numberToWords(number / 10) + ' puluh ' + ((number % 10 == 0) ? '' : numberToWords(number % 10))
  if (number < 200) return 'seratus ' + ((number % 100 == 0) ? '' : numberToWords(number % 100))
  if (number < 1000) return numberToWords(number / 100) + ' ratus ' + ((number % 100 == 0) ? '' : numberToWords(number % 100))
  if (number < 2000) return 'seribu ' + ((number % 100 == 0) ? '' : numberToWords(number % 100))
  if (number < 1e6) return numberToWords(number / 1000) + ' ribu ' + ((number % 1000 == 0) ? '' : numberToWords(number % 1000))
  if (number < 1e9) return numberToWords(number / 1e6) + ' juta ' + ((number % 1e6 == 0) ? '' : numberToWords(number % 1e6))
  if (number < 1e12) return numberToWords(number / 1e9) + ' milyar ' + ((number % 1e9 == 0) ? '' : numberToWords(number % 1e9))
  if (number < 1e15) return numberToWords(number / 1e12) + ' trilyun ' + ((number % 1e12 == 0) ? '' : numberToWords(number % 1e12))
}

// Driver code
console.log(numberToWords(4))
console.log(numberToWords(27))
console.log(numberToWords(102))
console.log(numberToWords(38079))
console.log(numberToWords(82102713))
console.log(numberToWords(1e9))
console.log(numberToWords(990))
console.log(numberToWords(705))
console.log(numberToWords(1000000))
console.log(numberToWords(2011845))
