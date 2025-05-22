import React from 'react';

const CharacterDetails = ({ selectedCharacter }) => {
  if (!selectedCharacter) return null;

  return (
    <div className="character-details">
      <h2>{selectedCharacter.name}</h2>
      <img src={selectedCharacter.image} alt={selectedCharacter.name} />
      <p>{selectedCharacter.description}</p>
    </div>
  );
};

export default CharacterDetails;
