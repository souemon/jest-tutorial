export function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('peanut butter');
      }, 1000);
    });
}

export function fetchDataError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('error');
      }, 1000);
    });
}

export function fetchDataCallback(callback) {
    setTimeout(() => callback("peanut butter"), 1000);
}

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    return expect(fetchDataError()).rejects.toMatch('error');
});