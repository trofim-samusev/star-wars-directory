import { FC } from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
  value: string;
};

export const PersonFeature: FC<Props> = (props) => {
  const { title, value, children } = props;
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography>{title}</Typography>
      <Typography sx={{ ml: 1 }}>{value}</Typography>
      {children}
    </Box>
  );
};
