import React, { useState } from 'react';

const characters = [
  {
    id: 1,
    name: 'ayslan',
    image: '../public/ays.jpg',
    description: 'lorem.'
  },
  {
    id: 2,
    name: 'brian',
    image: '../public/brian.jpg',
    description: 'Um elfo arqueiro da floresta.'
  },
  {
    id: 3,
    name: 'dudu',
    image: '../public/dudu.jpg',
    description: 'Um poderoso mago cinzento.'
  }
];

export default function Character() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gallery-container">
      <input
        type="text"
        placeholder="Buscar personagem..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="character-grid">
        {filteredCharacters.map((char) => (
          <img
            key={char.id}
            src={char.image}
            alt={char.name}
            onClick={() => setSelectedCharacter(char)}
            className="character-thumbnail"
          />
        ))}
      </div>

      {selectedCharacter && (
        <div className="character-details">
          <h2>{selectedCharacter.name}</h2>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          <p>{selectedCharacter.description}</p>
        </div>
      )}
    </div>
  );
}