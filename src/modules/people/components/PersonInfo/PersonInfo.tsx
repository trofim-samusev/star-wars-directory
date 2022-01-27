import { Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Person } from '../../types';

type Props = {
  person: Person;
};

export const PersonInfo = (props: Props) => {
  const { person } = props;

  return (
    <Paper elevation={3}>
      <Button
        component={Link}
        size="small"
        to="/people"
        startIcon={<ArrowBackIcon />}
      >
        Go Back
      </Button>
      <Typography variant="h1" gutterBottom>
        {person.name}
      </Typography>
    </Paper>
  );
};
