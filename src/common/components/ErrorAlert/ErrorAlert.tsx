import { Alert, AlertTitle } from '@mui/material';

type Props = {
  error: Error;
};

export const ErrorAlert = (props: Props) => {
  const { error } = props;

  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      <strong>{error.message}</strong>
      <br />
      Please try again later :(
    </Alert>
  );
};
