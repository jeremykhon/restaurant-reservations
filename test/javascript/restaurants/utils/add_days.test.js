import addDays from 'restaurants/utils/add_days';

describe('#addDays', () => {
  const date = new Date('2019-06-01');

  it('returns correct date', () => {  
    const receivedDate = addDays(date, 2);
    const expectedDate = new Date('2019-06-03');
    expect(receivedDate).toEqual(expectedDate);
  });

  it('returns correct date when days is negative', () => {
    const receivedDate = addDays(date, -2);
    const expectedDate = new Date('2019-05-30');
    expect(receivedDate).toEqual(expectedDate);
  });

  it('returns a date object', () => {
    const receivedDate = addDays(date, 2);
    expect(receivedDate).toBeInstanceOf(Date);
  });
});
