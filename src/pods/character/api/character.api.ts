import { Character } from './character.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query CharacterQuery($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        created
      }
    }
  `;

  return graphQLClient
    .request<GetCharacterResponse>(query, { id })
    .then((response) => response.character)
    .catch(() => null);
};
