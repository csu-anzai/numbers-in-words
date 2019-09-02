// RELEASE 0

function numberToWords0(number) {
  var numIndex = {
    sembilan: 9,
    delapan: 8,
    tujuh: 7,
    enam: 6,
    lima: 5,
    empat: 4,
    tiga: 3,
    dua: 2,
    satu: 1
  }

  var belasan = {
    sebelas: 11,
    'dua belas': 12,
    'tiga belas': 13,
    'empat belas': 14,
    'lima belas': 15,
    'enam belas': 16,
    'tujuh belas': 17,
    'delapan belas': 18,
    'sembilan belas': 19
  }

  var numIndex2 = {
    ratus: 100,
    puluh: 10
  }

  var result = '';

  // kondisi jika angka adalah belasan

  if (number >= 10 && number <= 19) {
    for (key in belasan) {
      if (belasan[key] == number) {
        result += key;
      }
    }
    return result;
  }

  // kondisi jika angka adalah 100-199

  if (number >= 100 && number <= 199) {
    result += 'seratus ';
    number -= 100;
number -= numIndex[key1];
    if (number < 10) {
      for (key1 in numIndex) {
        if (numIndex[key1] == String(number)[0]) {
          result += key1;
          number -= numIndex[key1];
        }
      }
    }
    // return result;
    if (number >= 10 && number <= 19) {
      for (key in belasan) {
        if (belasan[key] == number) {
          result += key;
        }
      }
      return result;
    }
  }

  // kondisi jika angka adalah 200-999

  for (key1 in numIndex) {
    if (numIndex[key1] == String(number)[0]) {
      for (key2 in numIndex2) {
        while (number >= (numIndex[key1] * numIndex2[key2])) {
          result += key1 + ' ' + key2 + ' ';
          number -= (numIndex[key1] * numIndex2[key2]);
        }
      }
    }
  }

  // kondisi jika angka kurang dari 10
  
  if (number < 10) {
    for (key1 in numIndex) {
      if (numIndex[key1] == String(number)[0]) {
        result += key1;
      }
    }
  }
  return result;
}

// Driver code
console.log(numberToWords0(705));
console.log(numberToWords0(999));
console.log(numberToWords0(56));
console.log(numberToWords0(4));
console.log(numberToWords0(18));
console.log(numberToWords0(119));


// RELEASE 1

function numberToWords(number) {

  // exception handling & base case

  if (number === undefined || number === 0) {
    return '';
  }

  var angka = {
    nol: 0,
    satu: 1,
    dua: 2,
    tiga: 3,
    empat: 4,
    lima: 5,
    enam: 6,
    tujuh: 7,
    delapan: 8,
    sembilan: 9,
    sepuluh: 10,
    sebelas: 11,
    'dua belas': 12,
    'tiga belas': 13,
    'empat belas': 14,
    'lima belas': 15,
    'enam belas': 16,
    'tujuh belas': 17,
    'delapan belas': 18,
    'sembilan belas': 19
  }

  var puluhKeTriliun = {
    triliun: 100000000000,
    'ratus miliar': 100000000000,
    'puluh miliar': 10000000000,
    miliar: 1000000000,
    'ratus juta': 100000000,
    'puluh juta': 10000000,
    juta: 1000000,
    'ratus ribu': 100000,
    'puluh ribu': 10000,
    ribu: 1000,
    ratus: 100,
    puluh: 10
  }

  for (var i in angka) {
    if (angka[i] === number) {
      return i;
    }
  }

  if (String(number)[0] == 1) {
    for (j in puluhKeTriliun) {
      if (number - puluhKeTriliun[j] > 0) {
        return 'se' + j + ' ' + numberToWords(number - puluhKeTriliun[j])
      }
    }
  }
}

// Driver code
console.log(numberToWords(1)); // satu
console.log(numberToWords(11)); // sebelas
console.log(numberToWords(111)); // seratus sebelas
console.log(numberToWords(1111)); // seribu seratus sebelas
console.log(numberToWords(11111)); // sebelas ribu seratus sebelas
console.log(numberToWords(111111)); // seratus ribu sebelas ribu seratus sebelas