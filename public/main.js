let suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
let face = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
let cardDeck = []
let shownDeck = []

// push card to html

// .slice shuffled card
// .push shuffled card into new array  ----> shownDeck.push()
const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent =
      'Pick a card, any card!'
  }
}
const createDeck = () => {
  for (let i = 0; i < suit.length; i++) {
    console.log(suit[i]) // get suit
    for (let j = 0; j < face.length; j++) {
      // get face
      console.log(face[j] + ' of ' + suit[i]) // add suit to face
      let newCard = face[j] + ' of ' + suit[i]
      // push card to array
      cardDeck.push(newCard)
      console.log('card pushed to deck')
    }
  }
  document.querySelector('.output').textContent = '' // clear out old card
}
const shuffle = () => {
  shownDeck = []
  for (let i = 52; i > 1; i--) {
    // select a random card we have not hit yet
    const randomLocation = Math.floor(Math.random() * i)
    // swap the current card with the random card
    const lastCard = cardDeck[i] // define variables for shuffle
    cardDeck[i] = cardDeck[randomLocation]
    cardDeck[randomLocation] = lastCard
    console.log(lastCard)
    shownDeck.push(lastCard)
  }
}
const dealCard = () => {
  document.querySelector('.output').textContent = shownDeck[0]
  console.log('does this do anything?' + shownDeck[0])
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.shuffle').addEventListener('click', createDeck)
document.querySelector('.shuffle').addEventListener('click', shuffle)
document.querySelector('.deal').addEventListener('click', dealCard)
