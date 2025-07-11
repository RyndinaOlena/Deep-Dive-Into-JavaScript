const btn = document.querySelector("#btn");
const container = document.querySelector("#container");
let counter = 1;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener("click", () => {
  const newElement = document.createElement("div");

  newElement.style.backgroundColor = getRandomColor();
  newElement.style.padding = "10px";
  newElement.style.margin = "5px";
  newElement.textContent = `New Element ` + counter++;

  container.appendChild(newElement);
});

container.addEventListener("click", (event) => {
  if (event.target.tagName === "DIV") {
    console.log("Clicked on:", event.target.textContent);
  }
});

container.addEventListener("mouseover", (event) => {
  const newSpan = document.createElement("span");
  if (event.target.tagName === "DIV") {
    newSpan.textContent = `Ви на ${event.target.textContent}`;
    newSpan.style.color = "red";
    newSpan.style.marginLeft = "10px";
    event.target.appendChild(newSpan);
  }
});
container.addEventListener("mouseout", (event) => {
  if (event.target.tagName === "DIV") {
    const span = event.target.querySelector("span");
    if (span) {
      span.remove();
    }
  }
});

const clearBtn = document.querySelector("#remove");
clearBtn.addEventListener("click", () => {
  container.innerHTML = "";
  counter = 1;
});

const button = document.querySelector("#myBtn");

document.addEventListener("helloEvent", (e) => {
  console.log("Кастомна подія спрацювала!", e.detail);
});

button.addEventListener("click", () => {
  const event = new CustomEvent("helloEvent", {
    detail: { user: "Olena" },
  });
  document.dispatchEvent(event);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    console.log("Esc key pressed");
  }
});
