import { Link, Stack } from '@mui/material';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import useMoviesQuery from '../../../hooks/useMoviesQuery';

export default function Movies() {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  } = useMoviesQuery();

  //TODO add skeleton
  if (isLoading) return <p>Loadind...</p>;

  //TODO add error component
  if (hasError) return <p>Error message</p>;

  const serialazeDatazForCarousel = data =>
    data.map(row => (
      <RouterLink key={row.id} to={`/movie/${row.kinopoiskId}`}>
        <BearSlideImage imageUrl={row.posterUrlPreview} />
      </RouterLink>
    ));

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: serialazeDatazForCarousel(responsePopular.data.items),
    },

    {
      title: 'Лучшие фильмы',
      url: '/best',
      data: serialazeDatazForCarousel(responseBest.data.items),
    },

    {
      title: 'Фильмы',
      url: '/films',
      data: serialazeDatazForCarousel(responseFilms.data.items),
    },

    {
      title: 'Сериалы',
      url: '/serials',
      data: serialazeDatazForCarousel(responseSerials.data.items),
    },

    {
      title: 'Мультфильмы',
      url: '/cartoons',
      data: serialazeDatazForCarousel(responseCartoons.data.items),
    },
  ];

  return (
    <>
      {carouselArr.map(carousel => (
        <Stack key={carousel.title}>
          <Link
            sx={{ mt: 2, mb: 2 }}
            variant="h4"
            component={RouterLink}
            to={carousel.url}
          >
            {carousel.title}
          </Link>
          <BearCarousel
            data={carousel.data}
            slidesPerView={1}
            slidesPerGroup={1}
            isEnableNavButton
            isEnableLoop
            isEnableAutoPlay
            autoPlayTime={5000}
            breakpoints={{
              375: {
                autoPlayTime: 0,
              },
              768: {
                slidesPerView: 5,
              },
            }}
          />
        </Stack>
      ))}
    </>
  );
}
