function numberToWords(number) {
  var result = []
  var input = number.toString()
  if (input.length > 3){
    var dipecah = pecahan(input)
    for (i=0;i<dipecah.length;i++){
      result.push(string(dipecah[i]))
    }
  } else {
    return string(input)
  }
  if (result.length == 2){
    if (result[1]===undefined){
      return result[0] + ' ribu '
    } else if (result[0]=='satu'){
      return 'seribu ' + result[1]
    } else {
      return result[0] + ' ribu ' + result[1]
    }
  } if (result.length == 3){
    if (result[1]===undefined||result[2]===undefined){
      return result[0] + ' juta'
    }
    return result[0] + ' juta ' + result[1] + ' ribu ' + result[2]
  }
  
}

function pecahan(input){
  var temp = ''
  var arr = []
  var arr2 = []
  var arr3 = []
  var counter = 0
    for(i=input.length-1;i>=0;i--){
      temp = temp + input[i]
      counter++
      if (counter == 3){
        arr.push(temp)
        temp = ''
        counter = 0
      }
    }
    if (temp.length > 0){
      arr.push(temp)
      }
  temp = ''
  for (i=0;i<arr.length;i++){
    for (j=arr[i].length-1;j>=0;j--){
      temp = temp + arr[i][j]
    }
    arr2.push(temp)
    temp=''
  }
  for (i=arr2.length-1;i>=0;i--){
    arr3.push(Number(arr2[i]))
  }
  return arr3;
}

function string(input){
  var convert = {
    1 : "satu",
    2 : "dua",
    3 : "tiga",
    4 : "empat",
    5 : "lima",
    6 : "enam",
    7 : "tujuh",
    8 : "delapan",
    9 : "sembilan",
    10 : 'sepuluh',
    11 : 'sebelas',
    100 : 'seratus',
  }
  var hasil = ''
  if (input < 12){
    hasil = convert[input]
  } else if (input < 20){
    hasil = convert[input%10] + ' belas'
  } else if (input < 100){
    hasil = convert[Math.floor(input/10)] + ' puluh '
    var angka = Number(String(input).slice(1))
    return hasil + numberToWords(angka)
  } else if (input < 200){
    return convert[100] + " " + numberToWords(input%100)
  } else if (input < 1000) {
    hasil = convert[Math.floor(input/100)] + ' ratus '
    var angka = Number(String(input).slice(1))
    return hasil + numberToWords(angka)
  }
  return hasil
}

// Driver code
console.log(numberToWords(705)); // tujuh ratus lima
console.log(numberToWords(1000000)); // satu juta
console.log(numberToWords(2011845)); // dua juta sebelas ribu delapan ratus lima
