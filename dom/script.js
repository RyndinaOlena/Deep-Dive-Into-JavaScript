const titleHeader = document.querySelector("#page-header h1");
console.log(titleHeader);
titleHeader.textContent = "Моя бібліотека";

const menuItems = document.querySelector(".menu__item");
menuItems.classList.add("highlight");
menuItems.style.color = "red";

const title = document.querySelectorAll(".book-cards h3");
console.log(title);
title.forEach((item) => {
  item.style.color = "blue";
});

const bookCards = document.querySelectorAll(".bookshelf");
bookCards.forEach((item) => {
  item.textContent = "Оберіть жанр";
});

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  if ((index + 1) % 2 === 0) {
    card.style.backgroundColor = "#f9f9f9";
  }
});

const cardAuthor = document.querySelectorAll(".card__author");
console.log(cardAuthor);
cardAuthor.forEach((author, i) => {
  if (author.textContent.includes("2")) {
    author.style.fontStyle = "italic";
  }
});
