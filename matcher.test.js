describe('一般的なマッチャー', () => {
  test('two plus two is four', () => {
      expect(2+2).toBe(4);
  });
  
  test('object assignment', () => {
      const data = {one: 1};
      data['two'] = 2;
      expect(data).toEqual({one: 1, two: 2});
    });
});


describe('真偽値(およびそれらしく思える値', () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull(); // null のみ一致
    expect(n).toBeDefined(); // toBeUndefined の反対
    expect(n).not.toBeUndefined(); // undefined のみ一致
    expect(n).not.toBeTruthy(); // if ステートメントが真であるとみなすものに一致
    expect(n).toBeFalsy(); // if ステートメントが偽であるとみなすものに一致
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});


describe('数値', () => {
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);         このように書くと、丸め込み誤差が原因で期待通りに動作しない
    expect(value).toBeCloseTo(0.3); // これならば正しく動く
  });

});


// toMatch で、文字列に対して正規表現でマッチするか確認できます。
describe('文字列', () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
});


describe('配列と反復可能なオブジェクト', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
});


describe('例外', () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
  
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // Or you can match an exact error message using a regexp like below
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });
});
