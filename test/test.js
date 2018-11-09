var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {

    // navigate to the root and check the response is "hello world"
<<<<<<< HEAD
    request(app).get('/').expect('hey world this is a test configuration after dependencies have been fixed!', done);
=======
    request(app).get('/').expect('hey world i\'m doing this thing!', done);
>>>>>>> parent of e438bcd... Modify response header message.
  });
});