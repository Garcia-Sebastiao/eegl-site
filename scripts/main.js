const cards = document.querySelectorAll(".main-card-content");

for (let index = 0; index < cards.length; index++) {
  let id = 0;

  setInterval(() => {
    if (id == index) {
      cards.forEach((oldCard) => {
        oldCard.classList.remove("show");
      });
      cards[id].classList.add("show");
    }
    id++;

    if (id == cards.length) {
      id = 0;
    }
  }, 3000);
}
