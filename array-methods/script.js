const defaults = { theme: "light", layout: "grid", showNav: true };

const userPref = { layout: "list", showNav: false, fontSize: 16 };

const settings = Object.assign({}, defaults, userPref)
console.log(settings)

const set = { ...defaults, ...userPref }
console.log(set)

console.log(defaults)
console.log(userPref)

/////

const grades = { math: 90, history: 75, biology: 85, art: 100 };
const arr = Object.entries(grades).map(([name, age]) => {

    console.log(`${name} : ${age}`)
})
////
const arr2 = [2, 5, 8];
function sumAll(...nums) {
    return nums.reduce((ac, num) => ac + num, 0)
}
console.log(sumAll(...arr2))
console.log(sumAll())

////
const input = {
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "secret",
    debug: true,
    logLevel: "verbose",
    version: 2
};
function analyzeConfig(config) {
    const dbKeys = ["host", "port", "user", "password"];

    return Object.entries(config).reduce(
        (acc, [key, value]) => {
            if (dbKeys.includes(key)) {
                acc.dbSettings[key] = value;
            } else {
                acc.otherSettings[key] = value;
            }
            return acc;
        },
        { dbSettings: {}, otherSettings: {} }
    );
}

console.log(analyzeConfig(input))