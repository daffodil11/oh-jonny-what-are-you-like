const app = require('./app');
const request = require('supertest')(app);
const { expect } = require('chai');

describe('/api/produce-report', () => {
    it('POST takes an object with a URL', () => {
        return request
        .post('/api/produce-report')
        .send({ url: 'https://broken-links-api.herokuapp.com/'})
        .expect(200)
        .then(({ body }) => {
            console.log(body);
            expect(body.result).to.deep.equal({
                url: 'https://broken-links-api.herokuapp.com/',
                totalLinks: 20,
                brokenLinks: 5
            });
        });
    })
})