var request = require('supertest');
var app = require('../../server');
var should = require('should');

var data = {
    agent_id: "asd@ss.com",
    lead: {
        first_name: "ray"
    }
};

describe('The Lead controller', function () {
    it('should return a 200 status code when add new lead', function (done) {
        request(app).post('/v1/lead').send(data).end(function (err, res) {
            res.should.have.status(200);
            done();
        });
    });

    it('should return error object if agent id is empty.', function (done) {
        request(app).post('/v1/lead').send({}).end(function (err, res) {
            res.should.have.status(200);
            res.body.should.have.property('err');
            res.body.err.should.equal('agent id is empty.');
            done();
        });
    });

    it('should return error object if no lead.', function (done) {
        request(app).post('/v1/lead').send({agent_id:'asd@ss.com'}).end(function (err, res) {
            res.should.have.status(200);
            res.body.should.have.property('err');
            res.body.err.should.equal('there is no name for the lead.');
            done();
        });
    });

    it('should return error object if no lead.', function (done) {
        request(app).post('/v1/lead').send({agent_id:'asd@ss.com', lead:{email:'sdf@ss.com'}}).end(function (err, res) {
            res.should.have.status(200);
            res.body.should.have.property('err');
            res.body.err.should.equal('there is no name for the lead.');
            done();
        });
    });

});