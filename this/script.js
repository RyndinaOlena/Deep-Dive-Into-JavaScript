const text = document.getElementById("text");

const counter = {
  count: 0,

  increment() {
    this.count += 1;
    return this.count;
  },

  incrementArrow: () => {
    this.count += 1;
    return this.count;
  },
};

const inc = counter.increment;
document.getElementById("btn1").addEventListener("click", () => {
  const result = counter.increment();
  text.innerHTML += `<p>counter.increment: ${result}</p>`;
});

function sayHello(greeting, punctuation) {
  return `${greeting}, я — ${this.name}${punctuation}`;
}
const alice = { name: "Аліса" };

const bob = { name: "Боб" };

console.log(sayHello.call(alice, "Привіт", "!"));
console.log(sayHello.apply(bob, ["Привіт", "!"]));

const aliceHello = sayHello.bind(alice, "Привіт");

aliceHello("!");

function greetAll(greeting) {
  this.forEach((name) => console.log(`${greeting}, ${name}!`));
}

const names = ["Оля", "Іван", "Маша"];

greetAll.call(names, "Вітаю");
