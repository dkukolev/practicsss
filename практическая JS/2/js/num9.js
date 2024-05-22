document.querySelector('.otpr_12').onclick = Click12;

function Click12(){
    
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0) {
            document.querySelector('.out12').innerHTML += i + ' ';
        }
      }   
}

document.querySelector('.otpr_11').onclick = Click11;

function Click11(){
    
    for (let i = 1; i <= 1000; i++) {
        if (i % 5 === 0) {
            document.querySelector('.out11').innerHTML += i + ' ';
        }
      }   
}

