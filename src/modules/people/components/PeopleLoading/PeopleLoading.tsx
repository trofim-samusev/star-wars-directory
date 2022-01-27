import { Box, Skeleton } from '@mui/material';

const CARDS_AMOUNT = 10;

export const PeopleLoading = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      {Array.from({ length: CARDS_AMOUNT }, (_, index) => (
        <Skeleton key={index} variant="rectangular" width={240} height={280} />
      ))}
    </Box>
  );
};
