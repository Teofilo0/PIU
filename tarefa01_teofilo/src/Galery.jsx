import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';


const characters = [
    {
        id: 1,
        name: 'ayslan',
        image: '../public/ays.jpg',
        description: 'Lá vai o Ayslan, o mestre da arte de ficar sem saber o que fazer!'
      },
      {
        id: 2,
        name: 'brian',
        image: '../public/brian.jpg',
        description: 'Brian, o elfo arqueiro, que nunca perde uma flecha... mas perde a chave de casa toda semana.'
      },
      {
        id: 3,
        name: 'dudu',
        image: '../public/dudu.jpg',
        description: 'Dudu, o mago cinzento, que lança feitiços e tenta fazer mágica... mas sempre acaba chamando o Uber errado.'
      },
      {
        id: 4,
        name: 'hiandro',
        image: '../public/hiandro.jpg',
        description: 'Hiandro, o ex-presidiário que agora só quer saber de fazer amigos e aprender a cozinhar arroz sem grudar.'
      },
      {
        id: 5,
        name: 'nilso',
        image: '../public/nilso.jpg',
        description: 'Nilso, o fugitivo, fugindo de responsabilidades e, ocasionalmente, do correio.'
      },
      {
        id: 6,
        name: 'prf',
        image: '../public/prf.jpg',
        description: 'PRF, o ex-assassino... de pizza. Sua única missão agora é comer sem culpa.'
      } 
];

export default function Galery() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCharacterClick = (character) => {
    if (selectedCharacter === character) {
      setSelectedCharacter(null);
    } else {
      setSelectedCharacter(character);
    }
  };
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

      <CharacterList 
        characters={filteredCharacters}
        onCharacterClick={handleCharacterClick}
      />

      <CharacterDetails selectedCharacter={selectedCharacter} />
    </div>
  );
}
