import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Pagination } from '@mui/material';

type Props = {
  count?: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const PeopleListPagination = (props: Props) => {
  const { count, page, setPage } = props;
  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (!count) {
    return null;
  }

  return (
    <Pagination
      sx={{ marginTop: 4 }}
      count={count}
      page={page}
      onChange={handleChange}
    />
  );
};
