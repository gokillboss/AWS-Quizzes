// authFlow.test.js
const axios = require('axios');
const axiosMock = require('axios-mock-adapter');
const API_URL = 'http://localhost:5000/api/v1';

// Create a mock instance of axios
const mock = new axiosMock(axios);

// Test user credentials
const testUser = {
  email: 'admin@gmail.com',
  password: 'hohuudai'
};

// Mocked token
let token = '';

// Tests for authentication flow
describe('Authentication Flow', () => {
  beforeAll(() => {
    // Mock login endpoint
    mock.onPost(`${API_URL}/auth/login`).reply(200, {
      token: 'mocked_token_string'
    });

    // Mock profile endpoint
    mock.onGet(`${API_URL}/user/profile`).reply(200, {
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@gmail.com',
      phoneNumber: '1234567890'
    });
  });

  test('should log in and get a token', async () => {
    const response = await axios.post(`${API_URL}/auth/login`, testUser);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('token');
    token = response.data.token;
  });

  test('should get user profile with valid token', async () => {
    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: { 'x-auth-token': token }
    });
    expect(response.status).toBe(200);
    expect(response.data).toEqual({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@gmail.com',
      phoneNumber: '1234567890'
    });
  });
});
