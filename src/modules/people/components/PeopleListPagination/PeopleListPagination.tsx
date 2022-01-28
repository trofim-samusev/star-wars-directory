import { ChangeEvent } from 'react';
import { Pagination } from '@mui/material';
import { usePeopleContext } from '../PeopleContext/usePeopleContext';

export const PeopleListPagination = () => {
  const { pagesCount, page, setPage } = usePeopleContext();
  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (!pagesCount) {
    return null;
  }

  return (
    <Pagination
      sx={{ marginTop: 4 }}
      count={pagesCount}
      page={page}
      onChange={handleChange}
    />
  );
};
