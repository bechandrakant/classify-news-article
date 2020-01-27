const handleSubmit = require('./formHandler')

test('Can make entered url as JSON object', () => {
    const data = 'test'
    const res = handleSubmit.makeJson(data)
    expect(res.url).toBe(data)
});