'use strict';
jest.useFakeTimers();
test('test', () => {
    const time = require('./timerMock');
    time();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
})