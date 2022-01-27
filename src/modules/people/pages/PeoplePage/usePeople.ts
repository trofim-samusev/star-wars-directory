import { useState } from 'react';
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
  const [page, setPage] = useState(1);
  const { data, error } = useSWR<Response>(
    `${BASE_URL}/people?page=${page}`,
    fetcher
  );
  const pagesCount = data?.count ? Math.ceil(data.count / 10) : 0;

  return {
    people: data?.results,
    isLoading: !error && !data,
    error,
    pagesCount,
    page,
    setPage,
  };
};
