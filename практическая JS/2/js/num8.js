document.querySelector('.otpr_10').onclick = Click10;

function Click10(){

    for(let i = 8; i<=20; i++){
        if(i%2== 0) {
          document.querySelector(".out10").innerHTML += i + ' ';
        }
    }

}

