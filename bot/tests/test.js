const assert = require('assert');
const calc = require('./calc.js');

let msg = {
  content: '!news 1',
  author: {
    tag: "Hollo#1361"
  }
}

describe('news', function() {
    it('should return object', function() {
      assert.equal(calc(), 2);
    });
    it('rssLinks length = 1', function() {
      assert.equal(calc(), 2);
    });
});

describe('settings', function() {
  it('should return object', function() {
    assert.equal(calc(), 2);
  });
});

describe('clearRSS', function() {
  it('rssLinks length = 0', function() {
    assert.equal(calc(), 2);
  });
});

describe('mongoDB', function() {
  it('database connection on', function() {
    assert.equal(calc(), 2);
  });
});