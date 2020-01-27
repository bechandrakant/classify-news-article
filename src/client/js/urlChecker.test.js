const urlChecker = require('./urlChecker')

test('If url is valid', () => {
    let url = ['https://www.google.com', "some fake text"];
    expect(urlChecker.urlChecker(url[0])).toBe(true);
    expect(urlChecker.urlChecker(url[1])).toBe(false);
});