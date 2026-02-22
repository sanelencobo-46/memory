const gameBoard = document.getElementById("gameBoard");

const values = [1, 1, 2, 2, 3, 3]

// Shuffle the numbers
values.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Create cards
values.forEach(value => {
   const card = document.createElement("div");
   card.classList.add("card");
   card.dataset.value = value;

card.innerHTML = `
<div class="card-inner">
<div class="card-front"></div>
<div class="cardr-back ${getColorClass(value)}">
${value}
</div>
</div>
`;

gameBoard.appendChild(card);

card.addEventListener("click", () => {
    if (lockBoard) return;
    if (card === firstCard) return;

    card.classList.add("flip");

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        lockBoard = true;

        if (firstCard.dataset.value === secondCard.dataset.value) {
            resetTurn();
        } else {
            setTimeout(() => {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
                resetTurn();
            }, 1000);
        }
      }
    });
 });

 function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
 }

 function getColorClass(value) {
    if (value == 1) return "green";
    if (value == 2) return "orange";
    if (value == 3) return "blue";
 }
