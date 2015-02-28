var assert = require('assert');

describe('ignore-css', function (){

  it('should fail when not installed', function (){
    try {
      require('./test.css');
      assert.ok(false);
    } catch (ex) {
      assert.ok(true);
    }
  });

  it('should ignore a css file when required and installed', function (){
    require('../index.js').install();
    try {
      require('./test.css');
      assert.ok(true);
    } catch (ex) {
      assert.fail(ex);
    }
  });

});
