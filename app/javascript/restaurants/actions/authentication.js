/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BASE_URL from '../utils/base_url';

export function fetchUser(jwt) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  return axios.get(
    `${BASE_URL}/return_user`, {
      headers: {
        'X-CSRF-Token': csrfToken,
        jwt,
      },
    },
  );
}

export function logIn(body) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  return axios({
    method: 'POST',
    url: `${BASE_URL}/authenticate`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
    },
    data: body,
  });
}

export function signUp(body) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  return axios({
    method: 'POST',
    url: `${BASE_URL}/users`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
    },
    data: body,
  });
}
