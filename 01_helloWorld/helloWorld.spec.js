const helloWorld = require('./helloWorld'); // this line is used to import the code from the helloWorld.js file

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
