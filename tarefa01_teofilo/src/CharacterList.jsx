import React from 'react';

const CharacterList = ({ characters, onCharacterClick }) => {
  return (
    <div className="character-grid">
      {characters.map((char) => (
        <img
          key={char.id}
          src={char.image}
          alt={char.name}
          onClick={() => onCharacterClick(char)}
          className="character-thumbnail"
        />
      ))}
    </div>
  );
};

export default CharacterList;
