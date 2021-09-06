let player = {
    name: "",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
// input Section:
const nameInput = document.getElementById("name-input")

player.name = ""

nameInput.addEventListener('keyup', (key) => {
    if (key.key === "Enter") {
         player.name = nameInput.value
         nameInput.style.animation = "displayOfTextBox 0.5s ease-in forwards";
        playerEl.textContent = player.name + ": $" + player.chips
    }
})

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 50
        
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 20
    }
    messageEl.textContent = message

    if (player.chips <= 0) {
        playerEl.textContent = `${player.name}: You Lost!!`
        player.chips = 200
    } else {
        playerEl.textContent = player.name + ": $" + player.chips
    }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
