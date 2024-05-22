let construct = {};

function saveInput() {

    const a = document.querySelector('#namee').value;
    const b = document.querySelector('#surname').value;
    const c = document.querySelector('#yearsss').value;
    const d = document.querySelector('#ball_ege').value;
    const e = document.querySelector('#kysssss').value;

        construct.name = a;
        construct.surfname = b; 
        construct.goda = c;
        construct.ege = d;
        construct.kyrs = e;

        document.querySelector('#info3').innerHTML =  construct.name + "<br>" + construct.surfname + "<br>" + construct.goda + "<br>" + construct.ege + "<br>" + construct.kyrs;
}
