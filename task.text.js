const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); 

chai.use(chaiHttp);
const { expect } = chai;

describe('Tasks API', () => {
    it('should retrieve all tasks', (done) => {
        chai.request(server)
            .get('/api/tasks')
            .end((err, res) =>                   expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });
