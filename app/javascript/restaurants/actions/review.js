/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BASE_URL from '../utils/base_url';

export function postReview(body, restaurantId, jwt) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  return axios({
    method: 'POST',
    url: `${BASE_URL}/restaurants/${restaurantId}/reviews`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      jwt,
    },
    data: body,
  });
}
