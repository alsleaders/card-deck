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
// let shownDeck = []

const createDeck = () => {
  for (let i = 0; i < suit.length; i++) {
    console.log(suit[i]) // get suit
    for (let j = 0; j < face.length; j++) {
      // get face
      console.log(face[j] + ' of ' + suit[i]) // add suit to face
      let newCard = face[j] + suit[i]
      // push card to array
      cardDeck.push(newCard)
      console.log('card pushed to deck')
    }
  }
}

// push card to html

// .slice shuffled card
// .push shuffled card into new array  ----> shownDeck.push()
const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent =
      'Pick a card, any card!'
  }

  const shuffle = () => {
    for (let i = cardDeck.length; i > 1; i--) {
      // select a random card we have not hit yet
      const randomPosition = Math.floor(Math.random() * i)
      // swap the current card with the random card
      let holdingPattern = cardDeck[i]
      cardDeck[i] = cardDeck[randomPosition]
      cardDeck[randomPosition] = holdingPattern
      console.log('cards shuffled')
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deck').addEventListener('click', createDeck)
