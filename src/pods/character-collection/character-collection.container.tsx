import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { linkRoutes } from 'core/router';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleSeeDetails = (id: string) => {
    history.push(linkRoutes.character(id));
  }

  return (
    <CharacterCollectionComponent characterCollection={characterCollection} onSeeDetails={handleSeeDetails} />
  );
};
