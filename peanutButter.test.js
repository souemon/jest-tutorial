import {fetchData} from './peanutButter';
import {fetchDataError} from './peanutButter';
import {fetchDataCallback} from './peanutButter';

test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
});


test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchDataError();
    } catch (e) {
      expect(e).toMatch('error');
    }
});

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });
  
test('the fetch fails with an error', async () => {
    await expect(fetchDataError()).rejects.toMatch('error');
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchDataError().catch(e => expect(e).toMatch('error'));
});



test('the data is peanut butter', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchDataCallback(callback);
});