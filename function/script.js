function sumThree(a, b, c = 0) {
    return a + b + c
}
console.log(sumThree(1, 2, 3)); // 6 (1 + 2 + 3)
console.log(sumThree(5, 7)); // 12 (5 + 7 + 0)

const sumThreeExpression = function (a, b, c = 0) {
    return a + b + c
}
console.log(sumThreeExpression(1, 2, 3)); // 6 (1 + 2 + 3)
console.log(sumThreeExpression(5, 7)); // 12 (5 + 7 + 0)

// console.log(sumThreeArrow(1, 2, 3)); // 6 (1 + 2 + 3)
const sumThreeArrow = (a, b, c = 0) => {
    return a + b + c
}
console.log(sumThreeArrow(1, 2, 3)); // 6 (1 + 2 + 3)
console.log(sumThreeArrow(5, 7)); // 12 (5 + 7 + 0)



// є три види та синтаксиса викликів функцій
// 1) Declaration (доступна в всьому коді для викликів)
// 2) Expresion (доступна для викликів тільки нижче в коді після оголошення)
// 3) Arrow (виконується один раз, не має свого this та arguments)(можна через ...rest достукатись до аргументів)

function makePromoGenerator(promo) {
    let counter = 1
    let text = promo
    return function () {
        return `${promo}${counter++}`;
    }
}

const saleFunc = makePromoGenerator('SALE-')
console.log(saleFunc())
console.log(saleFunc())
console.log(saleFunc())
const genB = makePromoGenerator('PROMO-');
console.log(genB())
console.log(genB())
console.log(genB())
// замикання має доступ до змінних 'батька' навіть після його завершення
// при кожному виклику запам'ятовує попереднє значення виклику