const fruits = ["яблуко", "банан", "апельсин", "ківі", "арбуз"]

console.log(fruits.push('диня'));
console.log(fruits.unshift("груша"));

console.log(fruits.shift());
console.log(fruits.pop());
console.log(`Фруктів залишилось: ${fruits[0]}, ${fruits[2]}, ${fruits[fruits.length - 1]}`)

const newAr = [...fruits];
const firstIndex = 0;
const lastIndex = newAr.length - 1;

const temp = newAr[firstIndex];

newAr[firstIndex] = newAr[lastIndex];
newAr[lastIndex] = temp;

console.log("Оригінал:", fruits);
console.log("Нова копія:", newAr);
console.log(`Мої улюблені фрукти: ${newAr}`)
function isInArray(el, arr) {
    const newAr = arr.includes(el)
    return newAr ? `Елемент ${el} є` : `Такого елемента немає`
}
console.log(isInArray('ківі', fruits))
console.log(isInArray('смородина', fruits))

