import useSWR from 'swr';

import { BASE_URL } from '../../../../common/constants';
import { fetcher } from '../../../../common/fetcher';
import { Person } from '../../types';

type Response = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
};

export const usePeople = () => {
  const { data, error } = useSWR<Response>(`${BASE_URL}/people`, fetcher);

  return {
    people: data?.results,
    isLoading: !error && !data,
    error,
  };
};
