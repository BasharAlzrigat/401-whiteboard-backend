
'use strict';

const { server } = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../models/index');

beforeAll(async () => {
    await db.sync();
  });
  

  afterAll(async () => {
    await db.drop();
  });


  describe('Web server', () => {

    test('Should respond with 404 status on a bad route', async () => {

        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);
    
      });
    test('Should respond with 404 status on a bad method', async () => {

        const response = await mockRequest.put('/');
        expect(response.status).toBe(404);
    
      });


    test('can add a post', async () => {

        const response = await mockRequest.post('/post').send({
          title: 'food',
          content: 'Shawerma and Zinger'
        });
    
        expect(response.status).toBe(201);
    
      });


    test('can get all the post', async () => {

        const response = await mockRequest.get('/post');
    
        expect(response.status).toBe(200);
    
      });

      it('can get a record for a post', async () => {

        const response = await mockRequest.get('/post/1');

        expect(response.status).toBe(200);
    });

    test('can update a record for a post', async () => {

        const response = await mockRequest.put('/post/1');

        expect(response.status).toBe(201);
    });

    test('can delete a record for a post', async () => {

        const response = await mockRequest.delete('/post/1');

        expect(response.status).toBe(204);
    });
});