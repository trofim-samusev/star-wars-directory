import { Typography } from '@mui/material';

import { ErrorAlert } from '../../../../common/components/ErrorAlert';
import { PeopleContextProvider } from '../../components/PeopleContext';
import { PeopleLoading } from '../../components/PeopleLoading';
import { PeopleSearchForm } from '../../components/PeopleSearchForm';
import { PeopleList } from '../../components/PeopleList';
import { PeopleListPagination } from '../../components/PeopleListPagination';
import { usePeopleContext } from '../../components/PeopleContext/usePeopleContext';

const PeopleMain = () => {
  const { isLoading, error, people } = usePeopleContext();

  if (isLoading) {
    return (
      <>
        <PeopleSearchForm isDisabled />
        <PeopleLoading />
        <PeopleListPagination />
      </>
    );
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  if (people) {
    return (
      <>
        <PeopleSearchForm />
        <PeopleList people={people} />
        <PeopleListPagination />
      </>
    );
  }

  return null;
};

export const PeoplePage = () => {
  return (
    <PeopleContextProvider>
      <Typography align="center" variant="h1" gutterBottom>
        People from Star Wars
      </Typography>
      <PeopleMain />
    </PeopleContextProvider>
  );
};
