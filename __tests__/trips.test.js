const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('TravelBackend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
  it('should be able to list all trips', async () => {
    const agent = request.agent(app);
    await request(app).get('/api/v1/github/login');
    await agent.get('/api/v1/github/login/callback?code=42').redirects(1);

    const firstTrip = {
      id: expect.any(String),
      location: 'vegas',
      start_date: '4/29/2022',
      end_date: '5/12/2022',
      users: expect.any(String),
    };
    const secondTrip = {
      id: expect.any(String),
      location: 'italy',
      start_date: '6/19/2022',
      end_date: '7/20/2022',
      users: expect.any(String),
    };
    const res = await agent.get('/api/v1/trips');
    expect(res.body).toEqual([firstTrip, secondTrip]);
  });
});
