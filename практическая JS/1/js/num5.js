document.querySelector('.otpr_7').onclick = Click7;

function Click7(){
    let str_1 = prompt('Первое число');
    let str_2 = prompt('Второе число');
    let str_3 = prompt('Третье число');

    let num1 = +str_1;
    let num2 = +str_2;
    let num3 = +str_3;

    var arr = [num1, num2, num3];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      
      document.querySelector('.out7').innerHTML = arr;
}