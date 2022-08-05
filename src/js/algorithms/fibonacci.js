// простое решение с рекурсией, не подойдет для большой величиы n (77)
function fib(n) {
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}

// тоже решение с рекурсией, но мы кэшируем предыдущие вызовы ф-ции и можно посчитать для числа 77
const cash = {};

function fib1(n) {
    if (n <= 2) return 1
    let res;
    if (cash[n - 1] && cash[n - 2]) {
        res = cash[n - 1] + cash[n - 2]
    } else {
        res = fib(n - 1) + fib(n - 2);
        cash[n] = res;
    }
    return res
}


// оптмальное решение с помощью цикла - способ динамического программирования снизу вверх
// каждый вызов n - это сумма двух предыдущих вызовов, запомним их в переменные a и b
function fib2(n) {
    let a = 1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c
}

alert(fib2(77))