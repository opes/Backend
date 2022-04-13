const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
<<<<<<< HEAD
jest.mock('../lib/utils/github');
=======

jest.mock('../lib/utils/github');

>>>>>>> 77e878bb709e9539eb901d81dd77db5588d531bc
describe('TravelBackend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
  it('should be able to list all trips', async () => {
    const trips = [
      {
        id: expect.any(String),
        location: 'vegas',
        startDate: '4/29/2022',
        endDate: '5/12/2022',
<<<<<<< HEAD
        users: expect.any(String),
=======
>>>>>>> 77e878bb709e9539eb901d81dd77db5588d531bc
      },
      {
        id: expect.any(String),
        location: 'italy',
        startDate: '6/19/2022',
        endDate: '7/20/2022',
<<<<<<< HEAD
        users: expect.any(String),
=======
>>>>>>> 77e878bb709e9539eb901d81dd77db5588d531bc
      },
    ];

    const agent = request.agent(app);
    let res = await agent.get('/api/v1/trips');
    expect(res.status).toEqual(401);

    await agent.get('/api/v1/github/login/callback?code=42').redirects(1);
    res = await agent.get('/api/v1/trips');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([...trips]);
  });
});
