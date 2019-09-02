function numberToWords(num) {
  var data = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh ', 'sebelas ']

  num = Math.floor(num)
  if(num < 12){
    return data[num];
  }
  else if(num < 20){
    return numberToWords(num%10) + ' belas ';
  }
  else if(num < 100){
    if(num%10 == 0){
      return numberToWords(num/10) + ' puluh ';
    }
    return numberToWords(num/10) + ' puluh ' + numberToWords(num%10);
  }
  else if(num < 200){
    if(num == 100){
      return 'seratus';
    }
    return 'seratus ' + numberToWords(num-100);
  }
  else if(num < 1000){
    if(num%100 == 0){
      return numberToWords(num/100) + ' ratus ';
    }
    return numberToWords(num/100) + ' ratus ' + numberToWords(num%100);
  }
  else if(num < 2000){
    if(num == 1000){
      return 'seribu';
    }
    return 'seribu ' + numberToWords(num-1000);
  }
  else if(num < 1000000){
    if(num%1000 == 0){
      return numberToWords(num/1000) + ' ribu ';
    }
    return numberToWords(num/1000) + 'ribu ' + numberToWords(num%1000);
  }
  else if(num < 1000000000){
    if(num%1000000 == 0){
      return numberToWords(num/1000000) + ' juta ';
    }
    return numberToWords(num/1000000) + ' juta ' + numberToWords(num%1000000);
  }
  else if(num < 1000000000){
    if(num%1000000 == 0){
      return numberToWords(num/1000000) + ' milyar ';
    }
    return numberToWords(num/1000000) + ' milyar ' + numberToWords(num%1000000);
  }
  else if(num < 1000000000000){
    if(num%1000000000 == 0){
      return numberToWords(num/1000000000) + ' triliun ';
    }
    return numberToWords(num/1000000000) + ' triliun ' + numberToWords(num%1000000000);
  }
}

// Driver code
console.log(numberToWords(60));
console.log(numberToWords(68));
console.log(numberToWords(100));
console.log(numberToWords(168));
console.log(numberToWords(500));
console.log(numberToWords(560));
console.log(numberToWords(568));
console.log(numberToWords(1568));
console.log(numberToWords(1000));
console.log(numberToWords(1001));
console.log(numberToWords(12458));
console.log(numberToWords(11200));
console.log(numberToWords(1120450));
console.log(numberToWords(1000000));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(999999999999));