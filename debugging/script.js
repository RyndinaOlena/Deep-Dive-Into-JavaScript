function calculateAverage(arr) {
    let sum = 0;
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])

        sum += arr[i];

    }

    return sum / arr.length;

}

const data = [10, 20, 30];

console.log(calculateAverage(data))

/////

const jsonStrings = [

    '{"name":"Оля"}',

    '{bad json}',

    '{"name":"Іван"}'

];

for (let s of jsonStrings) {
    try {
        const obj = JSON.parse(s);
        console.log(obj.name);
    } catch {
        console.log(new Error('Invalid JSON:'))
    }
}

/////////

function multiplyArray(arr) {

    let result = 1;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            console.log(new Error("Non - number element"))
        }
        result *= arr[i];
    }
    return result;

}

const values = [2, 3, "4", 5];
console.log(multiplyArray(values))

/////////
const users = [
    { name: "Оля", age: 20 },
    { name: "Іван", age: 25 }
];

function getUserAge(name) {
    console.log(name)
    for (let i = 0; i < users.length; i++) {

        if (users[i].name === name) {
            console.log(users[i].name === name)
            return users[i].age;
        }
    }

    return null;

}

console.log(getUserAge("Іван"))