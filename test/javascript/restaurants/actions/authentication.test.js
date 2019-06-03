import { logIn } from 'restaurants/actions/authentication';
import nock from 'nock';

describe('logIn', () => {
  it('fires a request with the correct body', async () => {
    const email = 'user@dummy.com';
    const password = 'hunter2';
    const csrfToken = 'JSy8FTLk5DcknPfiGQ9SrXIvctzvPIsw6djhlIIgHv/J3ocAiojkcsLAaZg9E/x5S+zO65VngKM+o8VUs65Xmw==';
    nock('http://localhost')
      .post('/api/v1/authenticate', { email, password })
      .reply(200, { auth_token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozOSwiZXhwIjoxNTU5NzE4ODI1fQ.c4j2r71sjhlLWJs03626zMqw1d8ZcduPPyNl3sZ3Je9' });
    await logIn(email, password, csrfToken);
  });

  it('fires a request with the correct csrf token header', async () => {
    const email = 'user@dummy.com';
    const password = 'hunter2';
    const csrfToken = 'JSy8FTLk5DcknPfiGQ9SrXIvctzvPIsw6djhlIIgHv/J3ocAiojkcsLAaZg9E/x5S+zO65VngKM+o8VUs65Xmw==';
    nock('http://localhost', {
      reqheaders: {
        'x-csrf-token': csrfToken,
      },
    })
      .post('/api/v1/authenticate')
      .reply(200, { auth_token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozOSwiZXhwIjoxNTU5NzE4ODI1fQ.c4j2r71sjhlLWJs03626zMqw1d8ZcduPPyNl3sZ3Je9' });
    await logIn(email, password, csrfToken);
  });
});
