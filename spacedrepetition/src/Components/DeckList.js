import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeckList = () => {
  const [decks, setDecks] = useState([]);  

  // fetches the decks from JSON server
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3002/decks');
      setDecks(result.data);
    }
    fetchData();
  }, []);
  return (
    <div>
    <h1>Your Decks</h1>
    {decks.map(deck => (
      <div key={deck.id}>
        <h2>{deck.name}</h2>
      </div>
    ))}
  </div>
)
};


export default DeckList
