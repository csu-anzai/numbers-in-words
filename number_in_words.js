function numberToWords(number) {
  var newWords = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"]
  
  if (number < 12){
    return newWords[number];
  } else {
    if (number<20){
      return numberToWords(number-10)+" belas ";
    } else if (number<100){
      return numberToWords(Math.floor(number/10))+" puluh "+numberToWords(number%10);
    } else if (number<200){
      return "seratus "+ numberToWords(number%100);
    } else if (number<1000){
      return numberToWords(Math.floor(number/100))+" ratus "+numberToWords(number%100);
    } else if (number<2000){
      return "seribu "+ numberToWords(number%1000);
    } else if (number<10000){
      return numberToWords(Math.floor(number/1000))+" ribu "+numberToWords(number%1000);
    } 
  }

}

// Driver code
console.log(numberToWords(715));
console.log(numberToWords(111));
console.log(numberToWords(1111));
console.log(numberToWords(11));
console.log(numberToWords(9121));
console.log(numberToWords(2011));
// console.log(numberToWords(11111));
// console.log(numberToWords(111111));
// console.log(numberToWords(11111));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
