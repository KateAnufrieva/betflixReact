import { Title } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import React from 'react';

export default function SelectMovies({
  countriesList,
  genresList,
  countries,
  order,
  year,
  genreId,
}) {
  const ordersList = [
    { title: 'По рейтингу', value: 'RATING' },
    { title: 'По оценкам', value: 'NUM_VOTE' },
  ];

  const yearsList = new Array(60).fill(null).map((__, index) => ({
    title: new Date().getFullYear() - index,
    value: new Date().getFullYear() - index,
  }));

  return (
    <Stack
      mt={2}
      mb={2}
      sx={{ flexDirection: { sm: 'column', md: 'row' }, gap: 1 }}
    >
      <FormControl fullWidth size="small">
        <InputLabel>Сортировка</InputLabel>
        <Select label="Orders">
          {ordersList.map(order => (
            <MenuItem key={order.value} value={order.value}>
              {order.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Страна</InputLabel>
        <Select label="Countries">
          {countriesList.map(country => (
            <MenuItem key={country.id} value={country.id}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Жанр</InputLabel>
        <Select label="Genres">
          {genresList.map(genre => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Год</InputLabel>
        <Select label="Years">
          {yearsList.map(year => (
            <MenuItem key={year.value} value={year.value}>
              {year.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button variant="outlined" startIcon={<CloseIcon />}>
          Сбросить
        </Button>
      </Box>
    </Stack>
  );
}
