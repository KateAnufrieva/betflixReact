import { Box, Typography } from '@mui/material';
import React from 'react';

export default function ErrorMessage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="auto"
    >
      <Typography variant="h6">
        Произошла ошибка - попробуйте обновить страницу
      </Typography>
    </Box>
  );
}
