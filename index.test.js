const {sum, person, toggle} = require('./index');

describe('test index.s file', () => {
  it('sums 1 + 2 to equal 3 ', () => {
    expect(sum(1, 2)).toBe(3)
  });

  it('it make a person', () => {
    expect(person('Kim', 20)).toEqual({
      name: 'Kim',
      age: 20,
    })
  });

  it('return false', () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(false)).toBeTruthy();
  });
});
