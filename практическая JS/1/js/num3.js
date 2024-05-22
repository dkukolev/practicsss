document.querySelector('.otpr_3').onclick = Click3;

function Click3(){
    const schetchic = document.querySelector('#trii').value;

    let num = Number.parseInt(schetchic);

    if(num <= 40){
        for(let i = 0; i<=Number(num);i++){
            document.querySelector('.out3').innerHTML += i + ' ';
        }
    }
    else{
        document.querySelector('.out3').innerHTML = ('Введено неверное  значение');
    }
}

document.querySelector('.otpr_4').onclick = Click4;

function Click4(){
    const schetchic2 = document.querySelector('#chitire').value;

    let num2 = Number.parseInt(schetchic2);

    let i = 0;

    if(num2>=41){
        document.querySelector('.out4').innerHTML = ('Введеное неверное значение');
    }
    else{
        while(i <= num2){
            document.querySelector('.out4').innerHTML += i + ' ';
            i++;
        }        
    }

}

document.querySelector('.otpr_5').onclick = Click5;

function Click5(){
    const schetchic3 = document.querySelector('#five').value;

    let num3 = Number.parseInt(schetchic3);

    let i = 0;

    if(num3>=41){
        document.querySelector('.out5').innerHTML = ('Введеное неверное значение');
    }
    else{
        do{
            document.querySelector('.out5').innerHTML += i + ' ';
            i++;            
        }while(i <= num3)      
    }

}