console.log("#2 Добавить объекту 2 метода на выбор (например, сказать имя, посчитать возраст)");

const stydentttt = {
    name : 'Андрей',
    years : 19
}



const nameStydent = document.querySelector('#name3').onclick = click1;
function click1(){
        document.querySelector('#info1').innerHTML = stydentttt.name;
}



const yearsStydent = document.querySelector('#years').onclick = click2;
function click2(){
    document.querySelector('#info2').innerHTML = stydentttt.years;
}