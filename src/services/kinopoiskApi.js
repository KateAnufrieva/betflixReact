import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const kinopoiskApiKey = import.meta.env.VITE_KINOPOISK_KEY;

const excludeGenres = [
  '',
  'новости',
  'для взрослых',
  'церемония',
  'реальное ТВ',
  'ток-шоу',
];

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: headers => {
      headers.set('X-API-KEY', kinopoiskApiKey);
      headers.set('Content-Type', 'application/json');
    },
  }),
  endpoints: builder => ({
    getFilmsTop: builder.query({
      query: ({ type, page }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),

    getFilms: builder.query({
      query: ({
        countries,
        genreId,
        order = 'NUM_VOTE',
        type = 'FILM',
        year,
        page,
        keyword = '',
      }) =>
        `/v2.2/films?countries=${countries}&genres=${genreId}&order=${order}&type=${type}&yearFrom=${year}&yearTo=${year}&page=${page}&keyword=${keyword}`,
    }),

    getGenreSAndCountries: builder.query({
      query: () => '/v2.2/films/filters',
      transformErrorResponse: response => ({
        ...response,
        genres: response.genres.filter(
          ({ genre }) => !excludeGenres.includes(genre),
        ),
      }),
    }),

    getFilm: builder.query({
      query: id => `/v2.2/films/${id}`,
    }),

    getSequelsAndPrequels: builder.query({
      query: id => `/v2.1/films/${id}/sequels_and_prequels`,
      transformErrorResponse: response =>
        response.map(el => ({ ...el, kinopoiskId: el.filmId })),
    }),

    getStaff: builder.query({
      query: id => `/v1/staff?filmId=${id}`,
    }),
  }),
});

export const {
  useGetFilmsTopQuery,
  useGetFilmsQuery,
  useGetGenreSAndCountriesQuery,
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
} = kinopoiskApi;
