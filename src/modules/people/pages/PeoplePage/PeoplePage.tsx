import { ErrorAlert } from '../../../../common/components/ErrorAlert';
import { PeopleLoading } from '../../components/PeopleLoading';
import { PeopleList } from '../../components/PeopleList';
import { usePeople } from './usePeople';

export const PeoplePage = () => {
  const { isLoading, error, people } = usePeople();

  if (isLoading) {
    return <PeopleLoading />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  if (people) {
    return <PeopleList people={people} />;
  }

  return null;
};
