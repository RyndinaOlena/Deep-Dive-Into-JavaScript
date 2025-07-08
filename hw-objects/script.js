const user = {
    name: "Олег",
    age: 25,
    city: "Kyiv"
};
function getProp(obj, key) {
    return obj.hasOwnProperty(key) && obj[key] || "Немає властивості";
}
console.log(getProp(user, "name"))

function setProp(obj, key, value) {
    obj[key] = value;
    return obj;
}
const updatedUser = setProp(user, "age", 30);
console.log(updatedUser)

const defaults = { theme: "light", showNav: true };
const prefs = { showNav: false, fontSize: 16 };
const settings = Object.assign({}, defaults, prefs)


console.log(settings);
console.log(defaults);
console.log(prefs);


const orig = {
    title: "Task",
    data: { id: 1, values: [10, 20] }
};
const copy = JSON.parse(JSON.stringify(orig))
copy.title = "add"
console.log(copy)
console.log(orig)