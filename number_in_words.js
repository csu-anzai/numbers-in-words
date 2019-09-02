function in_words(num){
  num = Math.floor(num);
  var numbersInWords = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
  if (num < 12) {
      return numbersInWords[num];
  } else {
      if (num < 20) {
          num -= 10;;
          return numbersInWords[num] + ' belas'
      } else if (num < 100) {
          if (num % 10 === 0) {
              return in_words(num/10) + ' puluh ';
          } else {
              return in_words(num/10) + ' puluh ' + in_words(num % 10);
          }
      } else if (num < 200) {
          if (num % 100 === 0) {
              return 'seratus';
          } else {
              return 'seratus ' + in_words(num%100);
          }
      } else if (num < 1000) {
          if (num % 100 === 0) {
              return in_words(num/100) + ' ratus';
          } else {
              return in_words(num/100) + ' ratus ' + in_words(num%100);
          }
      } else if (num < 2000) {
          if (num % 1000 === 0) {
              return 'seribu';
          } else {
              return 'seribu ' + in_words(num%1000);
          }
      } else if (num < 1e6) {
          if (num % 1e3 === 0) {
              return in_words(num/1e3) + ' ribu';
          } else {
              return in_words(num/1e3) + ' ribu ' + in_words(num%1e3);
          }
      } else if (num < 1e9) {
          if (num % 1e6 === 0) {
              return in_words(num/1e6) + ' juta';
          } else {
              return in_words(num/1e6) + ' juta ' + in_words(num%1e6);
          }
      } else if (num < 1e12) {
          if (num % 1e8 === 0 ) {
              return in_words(num/1e8) + ' milyar';
          } else {
              return in_words(num/1e8) + ' milyar ' + in_words(num%1e8);
          }
      } else if (num < 1e15) {
          if (num % 1e12) {
              return in_words(num/1e12) + ' trilyun';
          } else {
              return in_words(num/1e12) + ' trilyun ' + in_words(num%1e12);
          }
      }
  }
}
console.log(in_words(11));
console.log(in_words(18));
console.log(in_words(99));
console.log(in_words(100));
console.log(in_words(199));
console.log(in_words(239));
console.log(in_words(1999));
console.log(in_words(999999));
console.log(in_words(999999999));
console.log(in_words(9999999999));
console.log(in_words(999999999999999));
