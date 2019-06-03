import addDays from 'restaurants/utils/add_days';

describe('#addDays', () => {
  it('returns the correct date', () => {
    const date = new Date('2019-06-01');
    const receivedDate = addDays(date, 2);
    const expectedDate = new Date('2019-06-03');
    expect(receivedDate).toEqual(expectedDate);
  });
});
