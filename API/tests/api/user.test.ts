import supertest from 'supertest';
import app from '../../src/app';

let server: any;

beforeAll(async () => {
  // Start the Express server before running the tests
  await new Promise<void>((resolve) => {
    server = app.listen(process.env.TESTING_PORT, () => {
      console.log('Server started on port 3000');
      resolve();
    });
  });
});

afterAll(async () => {
  // Close the server after running the tests
  await new Promise<void>((resolve) => {
    // @ts-ignore
    server.close(() => {
      console.log('Server closed');
      resolve();
    });
  });
});

describe('Create User', () => {
  it('should return status 201 if user created', async () => {
    const user = {
      email: 'test@test.com',
      password: 'password',
      name: 'Test',
    };

    const res = await supertest(app)
      .post('/users')
      .send(user);
    expect(res.status).toEqual(201);
  });

  // it('should return status 400 if missing required fields', async () => {
  //   const user = {
  //     email: 'test@test.com',
  //     name: 'Test',
  //   };

  //   const res = await supertest(app)
  //     .post('/api/users')
  //     .send(user);
  //   expect(res.status).toEqual(400);
  // });

});

