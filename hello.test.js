const sum = require('./hello');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toMatchSnapshot();
});