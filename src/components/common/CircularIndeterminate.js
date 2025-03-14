import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' , width: '100vw' , height: '100vh'  , justifyContent: 'center' , alignItems: 'center'}}>
      <CircularProgress sx={{ color: 'black' }} />
    </Box>
  );
}