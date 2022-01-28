import { FC, useState, useMemo, SetStateAction, useCallback } from 'react';
import useSWR from 'swr';

import { BASE_URL } from '../../../../common/constants';
import { fetcher } from '../../../../common/fetcher';
import { Person } from '../../types';
import { PeopleContext } from './PeopleContext';

type PeopleResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
};

export const PeopleContextProvider: FC = (props) => {
  const { children } = props;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { data, error } = useSWR<PeopleResponse>(
    `${BASE_URL}/people?page=${page}&search=${search}`,
    fetcher
  );
  const pagesCount = data?.count ? Math.ceil(data.count / 10) : 0;
  const changeSearch = useCallback(
    (value: string | SetStateAction<string>) => {
      setSearch(value);
      setPage(1);
    },
    [setSearch, setPage]
  );

  const value = useMemo(
    () => ({
      people: data?.results,
      isLoading: !error && !data,
      error,
      pagesCount,
      page,
      setPage,
      search,
      setSearch: changeSearch,
    }),
    [data, error, pagesCount, page, setPage, search, changeSearch]
  );

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};
