import React from 'react';
import { Character } from './character.vm';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import * as classes from './character.styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <>
      {character ? (
        <Card variant="outlined" className={classes.card}>
          <CardHeader title={character.name} subheader={character.origin} />
          <CardContent>
            <div className={classes.root}>
              <CardMedia
                className={classes.characterImage}
                component="img"
                alt={`${character.name} from rick and morty series`}
                image={character.image}
              />
              <Typography variant="subtitle1">
                <ul className={classes.list}>
                  <li>
                    <span className={classes.boldTitle}>Status: </span>
                    {character.status}
                  </li>
                  <li>
                    <span className={classes.boldTitle}>Species: </span>
                    {character.species}
                  </li>
                  <li>
                    <span className={classes.boldTitle}>Type: </span>
                    {character.type}
                  </li>
                  <li>
                    <span className={classes.boldTitle}>Gender: </span>
                    {character.gender}
                  </li>
                  <li>
                    <span className={classes.boldTitle}>Location: </span>
                    {character.location}
                  </li>
                  <li>
                    <span className={classes.boldTitle}>Created: </span>
                    {character.created.toLocaleDateString()}
                  </li>
                </ul>
              </Typography>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Alert severity="error">404 - Character not found</Alert>
      )}
    </>
  );
};
