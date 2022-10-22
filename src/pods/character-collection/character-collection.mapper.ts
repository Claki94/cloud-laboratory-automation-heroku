import * as apiModel from 'pods/character/api';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin.name,
  image: character.image,
});
