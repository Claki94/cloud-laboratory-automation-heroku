import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { Character } from 'pods/character/api/character.api-model';
import { Characters } from './character-collection.api-model';

interface GetCharacterCollectionResponse {
  characters: Characters;
}

export const getCharacterCollection = async (): Promise<Character[]> => {
  const query = gql`
    query {
      characters {
        results {
          id
          name
          species
          type
          gender
          origin {
            name
          }
          image
        }
      }
    }
  `;

  return graphQLClient
    .request<GetCharacterCollectionResponse>(query)
    .then((response) => response.characters.results)
    .catch(() => []);
};
