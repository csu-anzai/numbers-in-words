function numberToWords(number) {
  // Your code here
  var words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh', 'sebelas']
  
  if(number < 12){
      return words[number]
  } else if(number < 20){
      return words[number % 10] + ' belas '
  } else if(number < 100){
      return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
  } else if(number < 200){
      return 'seratus ' + numberToWords(number % 100)
  } else if(number < 1000){
      return numberToWords(Math.floor(number / 100)) + ' ratus ' +  numberToWords(number % 100)
  } else if(number < 2000){
      return 'seribu ' + numberToWords(number % 1000)
  } else if(number < 1000000){
      return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  } else if(number < 1e9){
      return numberToWords(Math.floor(number / 1e6)) + ' juta ' + numberToWords(number % 1e6)
  } else if(number < 1e12){
      return numberToWords(Math.floor(number / 1e9)) + ' miliyar ' + numberToWords(number % 1e9)
  } else if(number < 1e15){
      return numberToWords(Math.floor(number / 1e12)) + ' triliun ' + numberToWords(number % 1e12)
  }
}


// Driver code
console.log(numberToWords(11));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
