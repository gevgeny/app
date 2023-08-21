const express = require('express');
const app = express();
const port = 3000;

function getCards ()  {
  return [
    {
      id: 1,
      word: "Hello",
      translation: "Bonjour",
      learned: falsegit
    },
    {
      id: 2,
      word: "Goodbye",
      translation: "Au revoir",
      learned: false
    },
    {
      id: 3,
      word: "Thank you",
      translation: "Merci",
      learned: false
    },
    {
      id: 4,
      word: "Please",
      translation: "S'il vous plaît",
      learned: false
    },
    {
      id: 5,
      word: "Yes",
      translation: "Oui",
      learned: false
    },
    {
      id: 6,
      word: "No",
      translation: "Non",
      learned: false
    },
    {
      id: 7,
      word: "Water",
      translation: "Eau",
      learned: false
    },
    {
      id: 8,
      word: "Food",
      translation: "Nourriture",
      learned: false
    },
    {
      id: 9,
      word: "Friend",
      translation: "Ami",
      learned: false
    },
    {
      id: 10,
      word: "Family",
      translation: "Famille",
      learned: false
    },
    {
      id: 11,
      word: "House",
      translation: "Maison",
      learned: false
    },
    {
      id: 12,
      word: "Book",
      translation: "Livre",
      learned: false
    },
    {
      id: 13,
      word: "School",
      translation: "École",
      learned: false
    },
    {
      id: 14,
      word: "Car",
      translation: "Voiture",
      learned: false
    },
    {
      id: 15,
      word: "Work",
      translation: "Travail",
      learned: false
    },
    {
      id: 16,
      word: "Travel",
      translation: "Voyage",
      learned: false
    },
    {
      id: 17,
      word: "Music",
      translation: "Musique",
      learned: false
    },
    {
      id: 18,
      word: "Movie",
      translation: "Film",
      learned: false
    },
    {
      id: 19,
      word: "Language",
      translation: "Langue",
      learned: false
    },
    {
      id: 20,
      word: "Time",
      translation: "Temps",
      learned: false
    }
  ];
}

let cards = getCards();

app.use(express.json());

app.get('/api/cards', (req, res) => {
  res.json(cards);
});

app.put('/api/card', (req, res) => {
  const card = req.body;
  const index = cards.findIndex((c) => c.id === card.id);
  cards[index] = card;

  res.json({...card});
});

app.get('/api/reset', (req, res) => {
  cards = getCards();
  res.json(cards);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});