// Нам нужно сделать так, чтобы функция работала следующим образом sum(0)(1)(2)(3)(4)(5) == 15

function sum(a){
    let sum = a;

    function f(b){
        sum += b;
        return f // для этого фнкция возвращает сама себя
    }

    f.toString = () => sum // реализуем метод преобразования к примитиву

    return f
}


alert(sum(5)(1)(4));

function printNumbers(from, to) {
    // рекурсивный setTimeout
    // setTimeout(function f(){
    //     console.log(from);
    //     from++
    //     if (from <= to){
    //         setTimeout(f, 1000)
    //     }
    // }, 1000)

    let timer = setInterval(function (){
        console.log(from)
        from++
        if (from > to){
            clearTimeout(timer)
        }
    }, 1000)
}

printNumbers(2, 6)

// ф-ция выполняется сразу (нет задержки 1с перед первым вызовом)
function printNumbers1(from, to) {
    function go(){
        console.log(from);
        from++;

        if (from > to){
            clearTimeout(timer)
        }

    }
    go();
    let timer = setInterval(go, 1000)
}