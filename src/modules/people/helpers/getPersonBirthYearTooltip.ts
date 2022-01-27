import { Person } from '../types';

export const getBirthYearTooltipTitle = (year: Person['birth_year']) => {
  if (year.includes('BBY')) {
    return 'BBY - Before the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.';
  }
  if (year.includes('ABY')) {
    return 'ABY -  After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.';
  }

  return '';
};
