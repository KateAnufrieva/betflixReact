import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import {
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
} from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage';

export default function MovieDetail() {
  const { id } = useParams();

  const responseFilm = useGetFilmQuery(id);
  const responseSequelsAndPrequel = useGetSequelsAndPrequelsQuery(id);
  const responseStaff = useGetStaffQuery(id);

  if (
    responseFilm.isLoading ||
    responseSequelsAndPrequel.isLoading ||
    responseStaff.isLoading
  ) {
    return (
      <Box display="flex" justifyContent="center" margin="auto">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (
    responseFilm.error ||
    responseSequelsAndPrequel.error ||
    responseStaff.error
  ) {
    return <ErrorMessage />;
  }

  return <div>MovieDetail</div>;
}
