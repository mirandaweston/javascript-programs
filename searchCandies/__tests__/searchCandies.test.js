const searchCandies = require('../src/searchCandies')

describe('searchCandies', () => {
  it('returns "Mars" and "Maltesers" when search string is "Ma" and max price is 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns "Mars" when search string is "Ma" and max price is 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('returns "Skitties", "Skittles", and "Starburst" when search string is "Ma" and max price is 2', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('returns "Skitties" and "Skittles" when search string is "S" and max price is 4', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it('returns "Mars" and "Maltesers" when search string is "ma" and max price is 10', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
});