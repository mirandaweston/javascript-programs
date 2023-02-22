const searchCandies = require('../src/searchCandies')

describe('searchCandies', () => {
  it('returns "Mars" and "Maltesers" when search string is "Ma" and max price is 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
});