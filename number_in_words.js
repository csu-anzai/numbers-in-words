function numberToWords(number) {
  // Your code here
  var obj = {
      1: 'satu',
      2: 'dua',
      3: 'tiga',
      4: 'empat',
      5: 'lima',
      6: 'enam',
      7: 'tujuh',
      8: 'delapan',
      9: 'sembilan',
  }
  var nol = {
      'ratus    ' : 100000000000000,
      'puluh    ' : 10000000000000,
      'trilion' : 1000000000000,
      'ratus   ' : 100000000000,
      'puluh   ' : 10000000000,
      'miliar' : 1000000000,
      'ratus  ' : 100000000,
      'puluh  ' : 10000000,
      'juta' : 1000000,
      'ratus ' : 100000,
      'puluh ' : 10000,
      'ribu' : 1000,
      'ratus' : 100,
      'puluh' : 10,
      '' : 1
  }
  var hasil = ""
  if(number == 0){
      return ''
  }
  else{
      for(var i = 0 ; i < Object.keys(nol).length ; i++){
          if(Math.floor(number / nol[Object.keys(nol)[i]]) != 0){
              if (Math.floor(number / nol[Object.keys(nol)[i]]) == 1 && Math.floor(number / nol[Object.keys(nol)[i+1]])-10 != 0 && (i+2) % 3 == 0){
                  if (Math.floor(number / nol[Object.keys(nol)[i+1]])-10 == 1){
                      hasil += `sebelas ${Object.keys(nol)[i+1]} `
                      
                  }
                  else{
                      hasil += `${obj[Math.floor(number / nol[Object.keys(nol)[i+1]])-10]} belas ${Object.keys(nol)[i+1]} `
                  }
                  i++
              }
              else if (number < 10){
                  hasil += `${obj[Math.floor(number / nol[Object.keys(nol)[i]])]} `
              }
              else if (Math.floor(number / nol[Object.keys(nol)[i]]) == 1  && number != 1 && i >= 11 || Math.floor(number / nol[Object.keys(nol)[i]]) == 1  && number != 1 && (i+1) % 3 != 0 && i < 11){
                  hasil += `se${Object.keys(nol)[i]} `
              }
              else{
                  hasil += `${obj[Math.floor(number / nol[Object.keys(nol)[i]])]} ${Object.keys(nol)[i]} `
              }
              number = number % nol[Object.keys(nol)[i]]
              return hasil + numberToWords(number)
          }
      }
  }
}

// Driver code
console.log(numberToWords(111111111111111));
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(705));
console.log(numberToWords(38079));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(82102713));