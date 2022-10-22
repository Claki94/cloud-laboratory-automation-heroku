import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
`;

export const characterImage = css`
  width: 100%;
`;

export const boldTitle = css`
  font-weight: bold;
`

export const list = css`
  list-style-type: none;
  margin: 12px 0 0 0;
  padding: 0;
`

export const card = css`
  width: 100%;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    width: 500px;
  }
`