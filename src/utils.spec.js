import { foo, bar } from './utils';

describe('utils.js', function () {

  describe('foo', function () {
    it('should be a function', function () {
      expect(foo).to.be.a('function');
    });

    it('should return 5', function () {
      let result = foo(2,3);
      expect(result).to.equal(5);
    });
  });


});
