let player = {
  name: "Bob",
  chips: 145,
};
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1; //Generates a random number between 1 and 13
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards:";
  cards.forEach((element) => {
    cardsEl.textContent += " " + element;
  });

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    //Player has not received blackjack.
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    //Player received a blackjack.
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    //Player busted.
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
