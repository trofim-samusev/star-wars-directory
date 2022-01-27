import { Box } from '@mui/material';

import { Person } from '../../types';
import { PersonCard } from '../PersonCard';

type Props = {
  people: Person[];
};

export const PeopleList = (props: Props) => {
  const { people } = props;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {people.map((person) => (
        <PersonCard person={person} key={person.url} />
      ))}
    </Box>
  );
};
