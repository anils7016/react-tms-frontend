import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Pageheader = ({title, subtitle}) => {
  return (
    <>
      <Box>
        <Typography variant="h2" sx={{ marginBottom: '2px' }}>
          {title}
        </Typography>
        <Typography variant="h5"> {subtitle}</Typography>
      </Box>
    </>
  );
};

export default Pageheader;
