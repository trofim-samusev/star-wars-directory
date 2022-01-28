import { createContext, Dispatch, SetStateAction } from 'react';

import { noop } from '../../../../common/helpers';
import { Person } from '../../types';

export type PeopleContextType = {
  people: Person[] | undefined;
  isLoading: boolean;
  error: Error | undefined;
  pagesCount: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const PeopleContext = createContext<PeopleContextType>({
  people: undefined,
  isLoading: false,
  error: undefined,
  pagesCount: 0,
  page: 1,
  setPage: noop,
  search: '',
  setSearch: noop,
});
