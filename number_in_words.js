function numberToWords(number) {
  var str = "";
  var strNum = String(number);
  var angka =[0,1,2,3,4,5,6,7,8,9]
  var newWords = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan"]
  var arr = [10,11,12,13,14,15,16,17,18,19];
  var arrWord = ["sepuluh","sebelas"," dua belas "," tiga belas "," empat belas "," lima belas "," enam belas "," tujuh belas "," delapan belas "," sembilan belas "];

  if (strNum == "0"){
    return str;
  } else {
    if (number<10){
      for (var i =0;i<angka.length;i++){
        if(angka[i]==number){
          str += newWords[i];
          strNum = strNum.slice(1);
        }
      }
    } else if (number<20){
      for (var j = 0; j<arr.length;j++){
        if(arr[j]==number){
          str += arrWord[j];
          strNum = strNum.slice(2);
        }
      }
    } else if (number<100){
      for (var k = 0;k<angka.length;k++){
        if(angka[k]==strNum[0]){
          str += newWords[k] + " puluh ";
          strNum = strNum.slice(1);
        }
      } 
    } else if (number<200){
      str += "seratus ";
      strNum = strNum.slice(1);
    } else if (number<1000){
      for (var l = 0;l<angka.length;l++){
        if(angka[l]==strNum[0]){
          str += newWords[l] + " ratus ";
          strNum = strNum.slice(1);
        }
      }
    } else if (number<2000){
      str += "seribu ";
      strNum = strNum.slice(1);
    } else if (number<10000){
      for (var l = 0;l<angka.length;l++){
        if(angka[l]==strNum[0]){
          str += newWords[l] + " ribu ";
          strNum = strNum.slice(1);
        }
      }
    } else if (number<20000){
      str += "sepuluh ribu ";
      strNum = strNum.slice(1);
    } else if (number<100000){
      for (var l = 0;l<angka.length;l++){
        if(angka[l]==strNum[0]){
          str += newWords[l] + " puluh ribu ";
          strNum = strNum.slice(1);
        }
      }
    } else if (number<200000){
      str += "seratus ribu ";
      strNum = strNum.slice(1);
    } else if (number<1000000){
      for (var l = 0;l<angka.length;l++){
        if(angka[l]==strNum[0]){
          str += newWords[l] + " ratus ribu ";
          strNum = strNum.slice(1);
        }
      }
    }
   //strNum = strNum.slice(1)
   number = Number(strNum); 
  return str+numberToWords(number);
  }
}

// Driver code
console.log(numberToWords(715));
console.log(numberToWords(111));
console.log(numberToWords(1111));
console.log(numberToWords(11));
console.log(numberToWords(1121));
console.log(numberToWords(1111));
console.log(numberToWords(11111));
console.log(numberToWords(111111));
console.log(numberToWords(11111));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
