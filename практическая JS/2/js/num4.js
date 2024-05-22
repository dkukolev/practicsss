console.log('№4-5');

function quadraticEquationSolution() {

        let a = prompt("Введите коэффициент а:");
        if (a === null || a === "") {
            return "Вы отменили ввод или не ввели значение";
        }
        
        let b = prompt("Введите коэффициент b:");
        if (b === null || b === "") {
            return "Вы отменили ввод или не ввели значение";
        }
        
        let c = prompt("Введите коэффициент c:");
        if (c === null || c === "") {
            return "Вы отменили ввод или не ввели значение";
        }
        
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            return "Введены некорректные данные. Пожалуйста, введите числа.";
        }
        
        if (a === 0) {
            return "Коэффициент a не может быть равен нулю";
        }
        
        let discriminant = Math.pow(b, 2) - 4 * a * c;
        
        if (discriminant > 0) {
            let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            console.log('У уравнения два корня: x1 = ' + x1 + ', x2 = ' + x2);
        } else if (discriminant === 0) {
            let x = -b / (2 * a);
            console.log('У уравнения один корень: x = ' + x);
        } else {
            console.log('У уравнения нет действительных корней');
        }
    }
    
    console.log(quadraticEquationSolution());