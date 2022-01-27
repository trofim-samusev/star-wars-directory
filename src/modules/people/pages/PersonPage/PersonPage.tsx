import { useParams } from 'react-router-dom';

import { ErrorAlert } from '../../../../common/components/ErrorAlert';
import { PersonLoading } from '../../components/PersonLoading';
import { PersonInfo } from '../../components/PersonInfo';
import { usePerson } from './usePerson';

export const PersonPage = () => {
  const { id } = useParams();
  const { isLoading, error, person } = usePerson(id);

  if (isLoading) {
    return <PersonLoading />;
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  if (person) {
    return <PersonInfo person={person} />;
  }

  return null;
};
