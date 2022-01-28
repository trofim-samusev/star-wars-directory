import { Person } from '../types';

export const getPersonMassTitle = (mass: Person['mass']) => {
  const isNumberLike = !Number.isNaN(Number(mass));

  if (isNumberLike) {
    return `⚖️ ${mass} kg`;
  }

  return '❔ unknown';
};
