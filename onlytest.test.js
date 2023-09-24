test.only('this will be the only test that runs', () => {
    console.log('only test');
    expect(true).toBe(true);
});

test('this test will not run', () => {
    console.log('will not run');
    expect('A').toBe('A');
});