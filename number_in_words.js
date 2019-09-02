function numberToWords(number) {
  // Your code here
  var words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh', 'sebelas']
  // var output = ''


    if(number<12){
      return words[number]
    }
    
    if(number<20){
      return numberToWords(number%10) + ' belas '
    }

    if(number<100){
      return numberToWords(Math.floor(number/10)) + ' puluh ' + numberToWords(number%10)
    }

    if(number<200){
      return 'seratus ' + numberToWords(number%100)
    }

    if(number<1000){
      return numberToWords(Math.floor(number/100)) + ' ratus ' +  numberToWords(number%100)
    }

    if(number<2000){
      return 'seribu ' + numberToWords(number%1000)
    }

    if(number<1e6){
      return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number%1000)
    }

    if(number<1e9){
      return numberToWords(Math.floor(number/1e6)) + ' juta ' + numberToWords(number%1e6)
    }
    
    if(number < 1e12){
      return numberToWords(Math.floor(number/1e9)) + ' miliyar ' + numberToWords(number%1e9)
    }

    if(number < 1e15){
      return numberToWords(Math.floor(number/1e12)) + ' triliun ' + numberToWords(number%1e12)
    }
//////////////////////////////////////////
  
}
  
  // Driver code
// console.log(numberToWords(4));
// console.log(numberToWords(27));
// console.log(numberToWords(202));
// console.log(numberToWords(2052));
// console.log(numberToWords(20525));
console.log(numberToWords(40410095));
// console.log(numberToWords(100000000));
