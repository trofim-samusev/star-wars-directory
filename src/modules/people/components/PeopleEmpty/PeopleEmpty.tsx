import { Alert, AlertTitle, Container } from '@mui/material';

export const PeopleEmpty = () => {
  return (
    <Container>
      <Alert severity="info">
        <AlertTitle>No Results Found :(</AlertTitle>
        Sorry, no results were found. Please try another query.
      </Alert>
    </Container>
  );
};
