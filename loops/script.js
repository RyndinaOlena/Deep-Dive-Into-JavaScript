const ar = [1, 2, 3, 4, 5]
let k = 0
for (a of ar) {
    k += a
}
console.log(k);

function multiplicationTable(n) {
    for (let a = 0; a < 10; a++) {
        console.log(`${a} * ${n} = ${a * n}`)
    }
}
multiplicationTable(3)

const warehouse = {
    apples: 10,
    bananas: 5,
    oranges: 12,
    pears: 7
};
let total = 0;
for (let fruit in warehouse) {
    console.log(`${fruit}: ${warehouse[fruit]}`);
    total += warehouse[fruit]
}
console.log(total)

const qwe = Object.entries(warehouse);

console.log()

const colors = { red: "#f00", green: "#0f0", blue: "#00f" };
function invert(objects) {
    const qwe = {};
    const arr = Object.entries(objects)
    console.log(arr)
    for (const [key, value] of arr) {
        console.log(key, value);
        qwe[value] = key;
        console.log(qwe)
    }
}
invert(colors)