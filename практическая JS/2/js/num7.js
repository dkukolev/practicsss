document.querySelector('.otpr_9').onclick = Click9;

function Click9(){

    let otvet = prompt('Число не меньше 5','5');
    +otvet;

    if(otvet > 5){
        alert("Отлично!");
    }
    else{
        alert("Ошибка!");
    }
}


