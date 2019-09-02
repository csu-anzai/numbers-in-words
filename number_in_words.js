function numberToWords(number) {
  var word = ['', 'satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  var cekNum = Math.floor(number)

  if(cekNum < 12){
      return word[cekNum]
  }else if (cekNum < 20){
      return numberToWords(cekNum%10) + ' belas'
  }else if(cekNum < 100){
      if(cekNum%10 == 0){
          return numberToWords(cekNum/10) + ' puluh '
      }else{
          return numberToWords(cekNum/10)+ ' puluh '+ numberToWords(cekNum%10)
      }
  }else if(cekNum < 200){
      return 'seratus '+ numberToWords(cekNum%100)
  }else if(cekNum < 1000){
      if(cekNum % 100 == 0){
          return numberToWords(cekNum/100)+ 'ratus'
      }else{
          return numberToWords(cekNum/100)+ ' ratus '+ numberToWords(cekNum%100)
      }
  }else if(cekNum < 2000){
      if (cekNum == 1000){
          return 'seribu'
      }else{
          return 'seribu'+ numberToWords(cekNum%1000)
      }
  }else if(cekNum < 1000000){
      if(cekNum % 1000 == 0 ){
          return numberToWords(cekNum/100)+ ' ribu'
      }else {
          return numberToWords(cekNum/1000)+' ribu ' + numberToWords(cekNum%1000)
      }
  }else if(cekNum < 10000000){
      if(cekNum % 100000 == 0 ){
          return 'sejuta'
      }else {
          return numberToWords(cekNum/1000000)+' juta ' + numberToWords(cekNum%100000)
      }
  }else if(cekNum < 1000000000){
          return numberToWords(cekNum/1000000)+' juta ' + numberToWords(cekNum%1000000)
  }else if(cekNum < 1000000000000){
      return numberToWords(cekNum/1000000000)+' milyar ' + numberToWords(cekNum%1000000000)
  }else if(cekNum < 10000000000000000){
      return numberToWords(cekNum/1000000000000)+' triliyun ' + numberToWords(cekNum%1000000000000)
  }
}


console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(109));
console.log(numberToWords(705));
console.log(numberToWords(7050));
console.log(numberToWords(38079))
console.log(numberToWords(82112713))
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(999999999999))
console.log(numberToWords(999999999999999))