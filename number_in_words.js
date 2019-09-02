function numberToWords(number) {
  // Your code here
  var kamus = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];

  if(number<12){
    return kamus[number];
  }else{
    if(number<20){
      return kamus[number % 10] +' belas'
    }else if(number<100){
      return kamus[Math.floor(number / 10)] +' puluh ' + kamus[number %10]
    }else if(number<200){
      return 'seratus '+ numberToWords(number%100);
    }else if(number<1000){
      return kamus[Math.floor(number/100)]+' ratus '+ numberToWords(number%100);
    }else if(number<2000){
      return 'seribu ' + numberToWords(number%1000);
    }else if(number<10000){
      return kamus[Math.floor(number/1000)]+' ribu ' + numberToWords(number%1000);
    }else if(number<100000){
      return kamus[Math.floor(number/10000)]+' puluh ' + numberToWords(number%10000);
    }else if(number<10000000){
      return kamus[Math.floor(number/1000000)]+' juta ' + numberToWords(number%1000000);
    }
  }
  
  
}

// Driver code 
// console.log(numberToWords(5)); 
// console.log(numberToWords(10)); 

console.log(numberToWords(111)); 
// console.log(numberToWords(13));

// console.log(numberToWords(20)); 
// console.log(numberToWords(25)); 
// console.log(numberToWords(30)); 
console.log(numberToWords(101)); 

console.log(numberToWords(112)); 

console.log(numberToWords(705)); // ' tujuh ratus lima'
console.log(numberToWords(999)); // ' tujuh ratus lima'
console.log(numberToWords(111)); // ' tujuh ratus lima'
console.log(numberToWords(330)); // ' tujuh ratus lima'
console.log(numberToWords(1000)); // ' tujuh ratus lima'

console.log(numberToWords(1130)); // ' tujuh ratus lima'
console.log(numberToWords(99999)); // ' tujuh ratus lima'

console.log(numberToWords(1000000)); // 'satu juta'
console.log(numberToWords(2011845)); // 'dua juta sebelas ribu delapan ratus empat puluh lima'
