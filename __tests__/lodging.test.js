const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const Lodging = require('../lib/models/Lodging');

describe('Lodging routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should create a new lodging row', async () => {
    const agent = request.agent(app);

    const hotel = {
      id: expect.any(String),
      nameOfPlace: 'Test Hotel',
      contactInfo: 'Test Info',
      pricePerNight: '100',
      checkIn: '1/1/2000',
      checkOut: '1/4/2000',
      address1: '123 Test Ave',
      address2: '',
      city: 'Test City',
      state: 'WA',
      zip: '12345',
    };
    const res = await agent.post('/api/v1/lodging').send(hotel);
    expect(res.body).toEqual({ id: expect.any(String), ...hotel });
  });

  it('should list a hotel by ID', async () => {
    const lodging = await Lodging.insert({
      id: expect.any(String),
      nameOfPlace: 'Test Hotel',
      contactInfo: 'Test Info',
      pricePerNight: '100',
      checkIn: '1/1/2000',
      checkOut: '1/4/2000',
      address1: '123 Test Ave',
      address2: '',
      city: 'Test City',
      state: 'WA',
      zip: '12345',
    });
    const res = await request(app).get(`/api/v1/lodging/${lodging.id}`);
    expect(res.body).toEqual(lodging);
  });
});
