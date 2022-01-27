import { Person } from '../types';

export const getPersonHairColorTitle = (hairColor: Person['hair_color']) => {
  if (hairColor.includes('n/a')) {
    return '❌ n/a';
  }

  if (hairColor.includes('none')) {
    return '🦲 none';
  }

  if (hairColor.includes('blond')) {
    return '👱‍♂️ blond';
  }

  if (hairColor.includes('white')) {
    return '🦳 white';
  }

  if (hairColor.includes('red')) {
    return '🦰 red';
  }

  return `🦱 ${hairColor}`;
};
