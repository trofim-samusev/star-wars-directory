import { Typography } from '@mui/material';

import { ErrorAlert } from '../../../../common/components/ErrorAlert';
import { PeopleLoading } from '../../components/PeopleLoading';
import { PeopleList } from '../../components/PeopleList';
import { PeopleListPagination } from '../../components/PeopleListPagination';
import { usePeople } from './usePeople';

export const PeoplePage = () => {
  const { isLoading, error, people, pagesCount, page, setPage } = usePeople();

  const title = (
    <Typography align="center" variant="h1" gutterBottom>
      People from Star Wars
    </Typography>
  );

  if (isLoading) {
    return (
      <>
        {title}
        <PeopleLoading />
      </>
    );
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  if (people) {
    return (
      <>
        {title}
        <PeopleList people={people} />
        <PeopleListPagination
          count={pagesCount}
          page={page}
          setPage={setPage}
        />
      </>
    );
  }

  return null;
};
