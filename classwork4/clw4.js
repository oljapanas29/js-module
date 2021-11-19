// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumb(a,b,c) {
    if(a<b && b<c) {
        console.log(a,b,c);
    } else if (a<c && c<b) {
        console.log(a,c,b);
    } else if (b<a && a<c) {
        console.log(b,a,c);
    } else if (b<c && c<a) {
        console.log(b,c,a);
    } else if (c<a && a<b) {
        console.log(c,a,b);
    } else if (c<b && b<a) {
        console.log(c,b,a);
    }
}
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumb(a,b,c) {
    if(a>b && b>c) {
        console.log(a,b,c);
    } else if (a>c && c>b) {
        console.log(a,c,b);
    } else if (b>a && a>c) {
        console.log(b,a,c);
    } else if (b>c && c>a) {
        console.log(b,c,a);
    } else if (c>a && a>b) {
        console.log(c,a,b);
    } else if (c>b && b>a) {
        console.log(c,b,a);
    }
}
// - створити функцію яка повертає найбільше число з масиву
function maxArray(numbers) {
    let max = numbers[0];
    for (let number of numbers) {
        if (number>max) {
            max=number;
        }
    }
}
// - створити функцію яка повертає найменьше число з масиву
function minArray(numbers) {
    let min = numbers[0] ;
    for (let number of numbers) {
        if (number<min) {
            min=number
        }
    }
}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArray(numbers) {
    let result = 0;
    for (let number of numbers) {
        result = result + number;
    }
    return result
}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function avgArray(numbers) {
 let result = sumArray(numbers);
 return result/numbers.length
}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
function array(numbers) {
    let max = numbers[0];
    let min = numbers[0];
    for (let number of numbers) {
        if(number>max) {
            max=number
        }if (number<min) {
            min=number
        }
    }
    console.log(max);
    return min;
}
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomizer(arr) {
    for (let i=0; i<10; i++) {
        arr[i]= Math.round(Math.random()*100);
    }
    return arr;
}
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
    // limit - аргумент, який характеризує кінцеве значення діапазону.
function randomizer(arr,limit) {
    for (let i=0; i<10; i++) {
        arr[i] = Math.round(Math.random()*limit);
    }
    return arr;
}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
   function reversArray(arr) {
    return arr.reverse()
}