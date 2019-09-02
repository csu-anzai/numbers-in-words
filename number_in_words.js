function in_words(number){
  // console.log(number)
  var numberString = String(number)
  var numberArray = []
  var temporaryNumberString = ''
  for(var i = 1; i <= numberString.length; i++){
      if(i % 3 !== 0){
          temporaryNumberString += numberString[numberString.length-i]
      }else{
          temporaryNumberString += numberString[numberString.length-i]
          if(temporaryNumberString.length !== 0){
              numberArray.push(Number(reverseString(temporaryNumberString)))
          }
          temporaryNumberString = ''
      }
  }
  if(temporaryNumberString.length !== 0){
      numberArray.push(Number(reverseString(temporaryNumberString)))
  }
  // console.log(numberArray)

  var reversedNumberArray = reverseElement(numberArray)
  // console.log(reversedNumberArray)
  var calculate = reversedNumberArray.map(decreaseIntegerF).map(convertToWord)
  // console.log(calculate)
  if(calculate.length === 5){
      if(calculate[1].length === 0)return calculate[0] + 'triliyun ' 
      if(calculate[2].length === 0)return calculate[0] + 'triliyun ' + calculate[1] + 'milyar '
      if(calculate[3].length === 0)return calculate[0] + 'triliyun ' + calculate[1] + 'milyar ' + calculate[2] + 'juta '
      return calculate[0] + 'triliyun ' + calculate[1] + 'milyar ' + calculate[2] + 'juta ' + calculate[3] + 'ribu ' + calculate[4]
  }else if(calculate.length === 4){
      if(calculate[1].length === 0)return calculate[0] + 'milyar ' 
      if(calculate[2].length === 0)return calculate[0] + 'milyar ' + calculate[1] + 'juta '
      return calculate[0] + 'milyar ' + calculate[1] + 'juta ' + calculate[2] + 'ribu ' + calculate[3] 
  }else if(calculate.length === 3){
      if(calculate[1].length === 0)return calculate[0] + 'juta '
      return calculate[0] + 'juta ' + calculate[1] + 'ribu ' + calculate[2]
  }else if(calculate.length === 2){
      return calculate[0] + 'ribu ' + calculate[1]
  }else if(calculate.length === 1){
      return calculate[0]
  }

}



function decreaseIntegerF(number){
  var integerContainer = []
  function decreaseInteger(integer){
    if(integer === 0)return 0;
      function declarePecahan(integer){
        var arr = [900, 800, 700, 600, 500, 400, 300, 200 ,100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
          for(var i = 0; i < arr.length; i++){
            if(arr[i] <= integer)return arr[i]    
          }
        }
      integerContainer.push(declarePecahan(integer))
      return decreaseInteger(integer - declarePecahan(integer))    
  }
  decreaseInteger(number)
  return integerContainer;
}
function reverseElement(arr){
  var output = []
  for(var i = 0; i < arr.length; i++){
      output.push(arr[arr.length-i-1])
    }
    return output
}
function reverseString(str){
  var output = ''
  for(var i = 0; i < str.length; i++){
    output += str[str.length-i-1]
  }
  return output
}
function convertToWordElement(num){
  if(num >= 100){
    var headNum = Math.floor(num/100)
    if(headNum === 1)headNum = 'se'
    else if(headNum === 2)headNum = 'dua '
    else if(headNum === 3)headNum = 'tiga '
    else if(headNum === 4)headNum = 'empat '
    else if(headNum === 5)headNum = 'lima '
    else if(headNum === 6)headNum = 'enam '
    else if(headNum === 7)headNum = 'tujuh '
    else if(headNum === 8)headNum = 'delapan '
    else if(headNum === 9)headNum = 'sembilan ' 
    return headNum + 'ratus'
  }else if(num >= 10 && num < 20){
    var headNum = num-10;
    if(headNum === 1)headNum = 'se'
    else if(headNum === 2)headNum = 'dua '
    else if(headNum === 3)headNum = 'tiga '
    else if(headNum === 4)headNum = 'empat '
    else if(headNum === 5)headNum = 'lima '
    else if(headNum === 6)headNum = 'enam '
    else if(headNum === 7)headNum = 'tujuh '
    else if(headNum === 8)headNum = 'delapan '
    else if(headNum === 9)headNum = 'sembilan ' 
    return headNum + 'belas'
  }else if(num >= 10){
    var headNum = Math.floor(num/10)
    if(headNum === 1)headNum = 'se'
      else if(headNum === 2)headNum = 'dua '
      else if(headNum === 3)headNum = 'tiga '
      else if(headNum === 4)headNum = 'empat '
      else if(headNum === 5)headNum = 'lima '
      else if(headNum === 6)headNum = 'enam '
      else if(headNum === 7)headNum = 'tujuh '
      else if(headNum === 8)headNum = 'delapan '
      else if(headNum === 9)headNum = 'sembilan ' 
      return headNum + 'puluh'
    }else if(num >= 1){
      var headNum = num;
      if(headNum === 1)headNum = 'satu'
      else if(headNum === 2)headNum = 'dua'
      else if(headNum === 3)headNum = 'tiga'
      else if(headNum === 4)headNum = 'empat'
      else if(headNum === 5)headNum = 'lima'
      else if(headNum === 6)headNum = 'enam'
      else if(headNum === 7)headNum = 'tujuh'
      else if(headNum === 8)headNum = 'delapan'
      else if(headNum === 9)headNum = 'sembilan' 
      return headNum
    }
}
function convertToWord(arr){
  var outputString = ''
  for(var i = 0; i < arr.length; i++){
      outputString += convertToWordElement(arr[i]) + ' '
    }
  return outputString
}

// Driver code
console.log(in_words(705));
console.log(in_words(1000000));
// console.log(in_words(2011845));
// console.log(in_words(12999999))
// console.log(in_words(182102713))
console.log(in_words(382079))
// console.log(in_words(129999991))
// console.log(in_words(1299999912))
// console.log(in_words(12999999123))
// console.log(in_words(129999991234))
console.log(in_words(999299999901234))
console.log(in_words(111111))
