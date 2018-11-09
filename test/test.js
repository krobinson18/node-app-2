var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with hey world', function(done) {

    // navigate to the root and check the response is "hello world"
    request(app).get('/').expect('hey world this is a test configuration after dependencies have been fixed!', done);
  });
});