function initializeCityDatabaseEach() {
    console.log('beforeEach');
}

function clearCityDatabaseEach() {
    console.log('afterEach');
}

function initializeFoodDatabaseEach2() {
    console.log('beforeEach2');
}

function initializeCityDatabaseAll() {
    console.log('beforeAll');
}

function clearCityDatabaseAll() {
    console.log('afterAll');
}

function isCity(city) {
    console.log('test');
    return city === 'Vienna' || city === 'San Juan';
}

function isValidCityFoodPair(city, food) {
    console.log('test2');
    return city === 'Vienna' && food === 'Wiener Schnitzel' ||
        city === 'San Juan' && food === 'Mofongo';
}

beforeEach(() => {
  initializeCityDatabaseEach();
});

afterEach(() => {
  clearCityDatabaseEach();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

beforeAll(() => {
  return initializeCityDatabaseAll();
});
  
afterAll(() => {
  return clearCityDatabaseAll();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});


describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabaseEach2();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});



