import { ChangeEvent, FormEvent, useState } from 'react';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { usePeopleContext } from '../PeopleContext/usePeopleContext';

type Props = {
  isDisabled?: boolean;
};

export const PeopleSearchForm = (props: Props) => {
  const { isDisabled = false } = props;
  const { setSearch } = usePeopleContext();
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (!inputValue) {
      setSearch('');
    }
  };
  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <Box
      mb={4}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Search people"
        type="search"
        name="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        disabled={isDisabled}
        value={value}
        onChange={handleChange}
      />
      <Button
        sx={{ marginLeft: 2 }}
        variant="contained"
        disabled={isDisabled}
        type="submit"
      >
        Search
      </Button>
    </Box>
  );
};
