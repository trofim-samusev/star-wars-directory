import useSWR from 'swr';

import { BASE_URL } from '../../../../common/constants';
import { fetcher } from '../../../../common/fetcher';
import { Person } from '../../types';

export const usePerson = (id?: string) => {
  const { data, error } = useSWR<Person>(
    id ? `${BASE_URL}/people/${id}` : null,
    fetcher
  );

  return {
    person: data,
    isLoading: !error && !data,
    error,
  };
};
