function intersection(arrA, arrB) {
    const setB = new Set(arrB);
    const result = new Set();

    for (let n of arrA) {
        if (setB.has(n)) {
            result.add(n);
        }
    }

    return [...result];
}
console.log(intersection([1, 2, 2, 3], [2, 3, 4])); // [2,3]

console.log(intersection(["a", "b"], ["b", "c"])); // ["b"]

//////


function union(...nums) {
    const flat = nums.flat();
    const unique = [...new Set(flat)];
    return unique;
}
console.log(union([1, 2, 3], [3, 4, 2, 5]))
/////


function groupByRole(arr) {
    const map = new Map();

    for (const user of arr) {
        const { name, role } = user;

        if (!map.has(role)) {
            map.set(role, []);
        }

        map.get(role).push(name);
    }

    return map;
}


const users = [
    { name: "Оля", role: "admin" },
    { name: "Іван", role: "user" },
    { name: "Марія", role: "admin" },
    { name: "Петро", role: "user" }
];

const grouped = groupByRole(users);

console.log(grouped.get("admin")); // 👉 ["Оля", "Марія"]
console.log(grouped.get("user"));  // 👉 ["Іван", "Петро"]
