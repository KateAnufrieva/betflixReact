import {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
} from '@mui/icons-material';

export const iconComponents = {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
};

export const TOP_LISTS = [
  {
    title: 'ТОП 100 популярных фильмов',
    icon: 'AutoAwesome',
    url: '/popular',
  },
  {
    title: 'ТОП 250 лучших фильмов',
    icon: 'StarPurple500',
    url: '/best',
  },
  {
    title: 'Вампиры',
    icon: 'Bloodtype',
    url: '/vampire',
  },
  {
    title: 'Комиксы',
    icon: 'MenuBook',
    url: '/comics',
  },
  {
    title: 'Семейные',
    icon: 'FamilyRestroom',
    url: '/family',
  },
  {
    title: 'Романтика',
    icon: 'VolunteerActivism',
    url: '/romantic',
  },
  {
    title: 'Зомби',
    icon: 'MoodBad',
    url: '/zombie',
  },
  {
    title: 'Катастрофы',
    icon: 'Pool',
    url: '/catastrophe',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/popular-serials',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies',
    url: '/films',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder',
    url: '/serials',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort',
    url: '/cartoons',
  },
];
