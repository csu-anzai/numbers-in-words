function numberToWords(number) {
  var dataValue = [100, 10];
  var data = ['ratus', 'puluh'];
  var dataSingleValue = [1,2,3,4,5,6,7,8,9];
  var dataSingle = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
  var strNumber = number.toString();
  var isBelas = false;
  var hasil = '';

  
  for(var i = 0; i<strNumber.length; i++){
    var pengaliData = parseInt(strNumber[i]) * (Math.pow(10, (strNumber.length - (1 + i))));
    if(pengaliData < 10){
      if(pengaliData == 0 && isBelas == true){
        hasil += ' sepuluh';
      }
      else{
        for(var j = 0; j<dataSingle.length; j++){
          if(pengaliData == dataSingleValue[j]){      
            if(isBelas == true){
              if(pengaliData == 1){
                hasil += ' sebelas'
              }
              else if(pengaliData == 0){
                hasil += ' sepuluh';
              }
              else{
                hasil += ' ' + dataSingle[j] + ' belas'
              }
            }
            else{
              hasil += ' ' + dataSingle[j];
            }
          }
        }
      }
    }
    else{
      for(var j = 0; j<data.length; j++){
        if(pengaliData - dataValue[j] >= 0){
          var pembagi = pengaliData/dataValue[j];
          
          if(pembagi > 1){
            for(var k = 0; k<dataSingle.length; k++){
              if(pembagi == dataSingleValue[k]){
                hasil += ' ' + dataSingle[k];
                hasil += ' ' + data[j];
              }
            }
          }
          else{
            if(pengaliData == 10){
              isBelas = true;
              break;
            }
            else{
              hasil += ' se'+data[j];
            }
          }
        }
      }
    }
  }
  return hasil;
}

// Driver code
console.log(numberToWords(919));

console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
