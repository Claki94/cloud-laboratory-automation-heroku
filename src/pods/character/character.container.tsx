import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(null);
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async () => {
    api.getCharacter(id).then(mapCharacterFromApiToVm).then(setCharacter);
  };

  React.useEffect(() => {
    if (id) handleLoadCharacter();
  }, []);

  return <CharacterComponent character={character} />;
};
