// function numberToWords(number) {
//   // Your code here
//   var obj = {
//     1 : 'satu',
//     2 : 'dua',
//     3 : 'tiga',
//     4 : 'empat',
//     5 : 'lima',
//     6 : 'enam',
//     7 : 'tujuh',
//     8 : 'delapan',
//     9 : 'sembilan',
//     100 : 'seratus',
//   }
  
//   number = number.toString().split('')
//   var temp = ''
//   if (number.length == 1) {
//     for(var i in obj){
//       if (i == number) {
//         return obj[i]
//       }
//     }
//   } else if (number.length == 2){
//     if (number[0] == 1) {
//       if (number[1] == 0) {
//         return 'sepuluh'
//       } else if (number[1] == 1){
//         return 'sebelas'
//       } else {
//         for(var i in obj){
//           if (i == number[1]) {
//             temp += obj[i] + ' belas'
//           }
//         }
//       }
//     } else {
//       for(var i in obj){
//         if (i == number[0]) {
//           temp+=obj[i] + ' puluh '
//         }
//       }
//       for(var i in obj){
//         if (i == number[1]) {
//           temp+=obj[i]
//         }
//       }
//     }
//   }
// }

function numberToWords(number){
  var kamus = ['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  var temp = ''
  while(number > 0){
    if (number < 12) {
      temp+=kamus[number]
      number = 0
    } else if (number < 20) {
      temp+=kamus[number%10] + ' belas '
      number = 0
    } else if (number < 100){
      temp+=kamus[Math.floor(number/10)] + ' puluh '
      number = (number % 10)
    } else if (number < 200){
      return 'seratus ' +  numberToWords(number - 100)
    } else if (number < 1000){
      return temp + numberToWords(Math.floor(number/100)) + ' ratus ' + numberToWords(number%100)
    } else if (number < 10000){
      if (Math.floor(number/1000) == 1) {
        temp += 'seribu'
      } else {
        temp += kamus[Math.floor(number/1000)] + ' ribu '
      }
    } else if (number < 1000000){
      return temp + numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number%1000)
    } else if (number < 1000000000){
      return temp + numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number%1000000)
    } else if (number < 1000000000000){
      return temp + numberToWords(Math.floor(number/1000000000)) + ' milyar ' + numberToWords(number%1000000000)
    } else if (number < 1000000000000000){
      return temp + numberToWords(Math.floor(number/1000000000000)) + ' triliyun ' + numberToWords(number%1000000000000)
    }
  }
  return temp 
}

// Driver code
console.log(numberToWords(100));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079));
console.log(numberToWords(82102713));
