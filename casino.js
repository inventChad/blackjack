/*let hands = ["rock", "paper", "scissor"]

function getrandom(){
  let x = Math.floor(Math.random() * 3)
    return hands[x]
} 
console.log(getrandom())*/




let cards=[]
let sum = 0
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let btnStart = document.getElementById('start-game')
let btnNew = document.getElementById('new-card')
let message =""
let hasblackjack = false
let isActive = false

let player = {
    name: "Chad",
    chips: 150
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+ player.chips

btnStart.addEventListener("click", function(){
    isActive = true
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards = [card1, card2]
    sum = card1+card2
    render()
    
})
function getRandomCard(){
    let num = Math.floor(Math.random()*13)+1
    if(num > 10){
        return 10
    }else if(num === 1){
        return 11
    }else{
        return num
    }
}

function render(){

    cardsEl.textContent = "Cards:"
    for(i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent ="Sum:"+ sum
    if(sum < 21){
        message = "You're still in the game, choose another card"
    }else if(sum === 21){
        message = "You've got blackjack"
        hasblackjack = true
    }else{
        message = "Unfortunately, you're out of the game."
        isActive = false
    }
    messageEl.textContent = message
}

btnNew.addEventListener("click", function(){
  
  if(isActive === true && hasblackjack === false){
    let card3 = getRandomCard()
    cards.push(card3)
    sum += card3
    render()
  }
})

