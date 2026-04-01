const request = require('supertest');
const app = require('../../src/app');

describe('Task API Integration Test', () => {

  test('POST /tasks success', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Task 1' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Task 1');
  });

  test('POST /tasks fail (no title)', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({});

    expect(res.statusCode).toBe(400);
  });

  test('GET /tasks should return array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /tasks should return tasks after adding', async () => {
    await request(app)
      .post('/tasks')
      .send({ title: 'Task Baru' });

    const res = await request(app).get('/tasks');
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('POST multiple tasks and GET them', async () => {
    await request(app).post('/tasks').send({ title: 'A' });
    await request(app).post('/tasks').send({ title: 'B' });

    const res = await request(app).get('/tasks');
    expect(res.body.length).toBeGreaterThanOrEqual(2);
  });

});