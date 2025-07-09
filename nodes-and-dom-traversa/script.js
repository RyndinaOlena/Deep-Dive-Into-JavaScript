const elements = document.querySelector("ul").children;
console.log(elements.length);

const firstElement = document
  .querySelector("ul")
  .firstElementChild.classList.add("highlight");
const lastElement = document
  .querySelector("ul")
  .lastElementChild.classList.add("highlight");

const items = document.querySelectorAll(".sub-item");
const secondItem = items.forEach((el, i) => {
  if (i === 1) {
    el.style.backgroundColor = "#eef";
  }
});
console.log(secondItem);

const firstArticle = document.querySelector('article[data-id="1"]');

if (firstArticle) {
  const secondArticle = firstArticle.nextElementSibling;
  console.log(firstArticle.nextElementSibling);
  if (secondArticle && secondArticle.getAttribute("data-id") === "2") {
    const heading = secondArticle.querySelector("h2");

    if (heading) {
      heading.style.fontStyle = "italic";
    }
  }
}

const articles = document.querySelectorAll(".article");

articles.forEach((article) => {
  const dataId = article.getAttribute("data-id");
  console.log(dataId);

  if (dataId && Number(dataId) % 2 === 0) {
    article.style.display = "";
  } else {
    article.style.display = "none";
  }
});
//// dataset = return all data attributes (commet for myself)


const container = document.querySelector('.articles');

container.childNodes.forEach(node => {
  if (node.nodeType === 3) return; 
  console.log(`nodeType: ${node.nodeType}, nodeName: ${node.nodeName}`);
});
