import { getGenderTitle } from './getPersonGenderTitle';

describe('getGenderTitle', () => {
  describe('when `male` is passed', () => {
    it('returns male + emoji', () => {
      expect(getGenderTitle('male')).toBe('👨 male');
    });
  });

  describe('when `female` is passed', () => {
    it('returns female + emoji', () => {
      expect(getGenderTitle('female')).toBe('👩 female');
    });
  });

  describe('when anything else is passed', () => {
    it('returns unknown + emoji', () => {
      expect(getGenderTitle('unknown')).toBe('❔ unknown');
      expect(getGenderTitle('n/a')).toBe('❔ unknown');
      expect(getGenderTitle('')).toBe('❔ unknown');
    });
  });
});
