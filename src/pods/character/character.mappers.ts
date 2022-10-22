import * as apiModel from './api';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character =>
  character
    ? {
        ...character,
        id: character.id.toString(),
        origin: character.origin.name,
        location: character.location.name,
        created: new Date(character.created),
      }
    : null;
