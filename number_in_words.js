function numberToWords(number) {
  // Your code here
  var result = ''
  var arr_satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']

  if (number === 0) {
    return result
  } else {
    if (number < 10) {
      return arr_satuan[number] //1 - 9
    } else if (number === 10) {
        return 'sepuluh' //10
    } else if (number === 11) {
        return 'sebelas' //11
    } else if (number > 11 && number < 20) {
        var numberMod = number % 10;
        return arr_satuan[numberMod] + ' belas' //12 - 19
    } else if (number > 19 && number < 100) {
        var numberMod = number % 10; 
        var divider =  Math.floor(number/10)
        return arr_satuan[divider] + ' puluh ' + numberToWords(numberMod) //20 - 99
   

    //Ratusan
    } else if (number > 99 && number < 200) {
        var numberMod = number % 100;
        return 'seratus ' + numberToWords(numberMod) //100 - 199
    } else if (number > 199 && number < 1000) {
        var numberMod = number % 100
        var divider = Math.floor(number/100)
        return arr_satuan[divider] + ' ratus ' + numberToWords(numberMod) //200 - 999

    //Ribuan
    } else if (number > 999 && number < 2000) {
        var numberMod = number % 1000;
        return 'seribu ' + numberToWords(numberMod) //1.000 - 1999
    } else if (number > 1999 && number < 10000) {
        var numberMod = number % 1000
        var divider = Math.floor(number/1000)
        return arr_satuan[divider] + ' ribu ' + numberToWords(numberMod) //2.000 - 9999
    
    //Puluh Ribuan
    } else if (number > 9999 && number < 11000) {
        var numberMod = number % 10000;
        return 'sepuluh ribu ' + numberToWords(numberMod) //10.000 - 10.999
    } else if (number > 10999 && number < 20000) {
        var numberMod = number % 1000;
        var divider = Math.floor(number/1000)
        return numberToWords(divider) + ' ribu ' + numberToWords(numberMod) //11.000 - 19.999
    } else if (number > 19999 && number < 100000) {
        var numberMod = number % 1000
        var divider = Math.floor(number/1000)
        return numberToWords(divider) + ' ribu ' + numberToWords(numberMod) //20.000 - 99.999

    //Ratus Ribuan
    } else if (number > 99999 && number < 110000) { 
        var numberMod = number % 1000;
        var divider = Math.floor(number/1000)
        return numberToWords(divider) + ' ribu ' + numberToWords(numberMod) //100.000 - 109.999
    } else if (number > 109999 && number < 1000000) {
        var numberMod = number % 1000;
        var divider = Math.floor(number/1000) 
        return numberToWords(divider) + ' ribu ' + numberToWords(numberMod) ////110.000 - 999.999

    //Jutaan
    } else if (number > 999999 && number < 10000000) {
        var numberMod = number % 1000000
        var divider = Math.floor(number/1000000)
        return numberToWords(divider) + ' juta ' + numberToWords(numberMod) //1.000.000 - 9.999.999

    //Puluh Jutaaan
    } else if (number > 9999999 && number < 100000000) {
      var numberMod = number % 1000000
      var divider = Math.floor(number/1000000)
      return numberToWords(divider) + ' juta ' + numberToWords(numberMod) //10.000.000 - 99.999.999

    //Ratus Jutaan
    } else if (number > 99999999 && number < 1000000000) {
      var numberMod = number % 1000000
      var divider = Math.floor(number/1000000)
      return numberToWords(divider) + ' juta ' + numberToWords(numberMod) //100.000.000 - 999.999.999

    //Milyaran
    } else if (number > 99999999 && number < 1000000000000) {
      var numberMod = number % 1000000000
      var divider = Math.floor(number/1000000000)
      return numberToWords(divider) + ' milyar ' + numberToWords(numberMod) //1.000.000.000 - 999.999.999.999

    //Triliun
    } else if (number > 99999999999 && number < 1000000000000000) {
      var numberMod = number % 1000000000000
      var divider = Math.floor(number/1000000000000)
      return numberToWords(divider) + ' triliun ' + numberToWords(numberMod) //1.000.000.000.000 - 999.999.999.999.999
    }
  
}
}

// Driver code
console.log(numberToWords(999999999999));
// console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
