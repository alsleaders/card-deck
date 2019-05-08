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
// let cardDeck = []
// let newCard = 0

// const createDeck = () => {
for (let i = 0; i < suit.length; i++) {
  console.log(suit[i]) //get suit
  for (let j = 0; j < face.length; j++) {
    // get face
    console.log(face[j] + ' of ' + suit[i]) // add suit to face
    // newCard = face[j] + suit[i]
  }
}
// }

// push card to array
// cardDeck.push(newCard)

// push card to html
const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)
