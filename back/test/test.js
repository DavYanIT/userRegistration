const app = require('../');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();
describe('Users', () => {
  describe('GET /', () => {
    it('should get all users', (done) => {
      chai.request(app)
      .get('/api/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});