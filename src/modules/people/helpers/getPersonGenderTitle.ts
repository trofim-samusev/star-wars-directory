import { Person } from '../types';

export const getGenderTitle = (gender: Person['gender']) => {
  switch (gender) {
    case 'male':
      return '👨 male ';
    case 'female':
      return '👩 female ';
    default:
      return '❔ unknown ';
  }
};
