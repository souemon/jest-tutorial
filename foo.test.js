jest.mock('./foo'); // this happens automatically with automocking
const foo = require('./foo');

const myMockFn = jest
  .fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

const mockFunc = jest.fn((a, b)=> a+b);

test('foo', () => {

    mockFunc(2, 3);

    // foo is a mock function
    foo.mockImplementation(() => 42);
    foo();
    // > 42
    
    myMockFn((err, val) => console.log(val));
    // > true
    
    myMockFn((err, val) => console.log(val));
    // > false
    
    const myMockFn2 = jest
      .fn(() => 'default')
      .mockImplementationOnce(() => 'first call')
      .mockImplementationOnce(() => 'second call');
    
    console.log(myMockFn2(), myMockFn2(), myMockFn2(), myMockFn2());
    // > 'first call', 'second call', 'default', 'default'
    
    const myObj = {
        myMethod: jest.fn().mockReturnThis(),
      };
      
      // is the same as
      
      const otherObj = {
        myMethod: jest.fn(function () {
          return this;
        }),
      };

      console.log("--------------------");
      console.log(otherObj.myMethod());
      console.log("--------------------");


      const myMockFn3 = jest
        .fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add42');

    // The mock function was called at least once
     expect(mockFunc).toHaveBeenCalled();
        
    // The mock function was called at least once with the specified args
    expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);
        
    // The last call to the mock function was called with the specified args
    expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);
        
    // All calls and the name of the mock is written as a snapshot
    expect(mockFunc).toMatchSnapshot();
});


