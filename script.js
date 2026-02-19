let firstCard = null;
let secondCard = null;
let lockBoard = false;

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        // 1. When a User clicks any card

        if (lockBoard || card === firstCard) return;

        card.style.visibility = "hidden"

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;

            if (firstCard.dataset.value === secondCard.dataset.value) {
                firstCard = null;
                secondCard = null;

            } else {
                lockBoard = true;

                setTimeout(() => {
                    firstCard.style.visibility = "visible";
                    secondCard.style.visibility = "visible";
                    firstCard = null;
                    secondCard = null;
                    lockBoard = false;
                }, 800);
            }
        }
     });
});
