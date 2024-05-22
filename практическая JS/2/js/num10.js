document.querySelector('.otpr_66').onclick = Click66;

function Click66(){
    let numsss = document.querySelector('#one666').value;
    +numsss;

    let onw = Number(String(numsss)[0]);
    let two = Number(String(numsss)[1]);
    let trii = Number(String(numsss)[2]);

    if(numsss<=999){
        let amstrong = (onw**3) + (two**3) + (trii**3);
        if(numsss == amstrong){
            document.querySelector('.out66').innerHTML = numsss + ' Число Армстронга';
        }
        else{
            document.querySelector('.out66').innerHTML = numsss + ' не число Армстронга';
        }
    }
    else{
        document.querySelector('.out66').innerHTML = 'Введите трехзначное число';  
    }
}