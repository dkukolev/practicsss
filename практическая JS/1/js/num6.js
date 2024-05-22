document.querySelector('.otpr_8').onclick = Click8;

function Click8(){
    let numbers = document.querySelector('#semmm').value;

        +numbers;
        let timeNum = numbers;

        if(timeNum <= 15){
            for(let i=0; i<=numbers;i++){
                if(timeNum%=2){
                    document.querySelector('.out8').innerHTML += numbers + " - нечетное <br>"
                    break;
                }
                else{
                    document.querySelector('.out8').innerHTML += numbers + " - четное <br>"
                    break;
                }
            }            
        }
        else{
            document.querySelector('.out8').innerHTML = "Надо ввести число от 0 до 15 <br>"
        }


}


