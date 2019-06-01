/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BASE_URL from '../utils/base_url';

export function createReservation(body, jwt) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  return axios({
    method: 'POST',
    url: `${BASE_URL}/bookings`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      jwt,
    },
    data: body,
  });
}

export function fetchReservations(filter, jwt) {
  return axios.get(`${BASE_URL}/bookings?filter=${filter}`, {
    headers: {
      jwt,
    },
  });
}

export function cancelReservation(reservationId, jwt) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  return axios({
    method: 'DELETE',
    url: `${BASE_URL}/bookings/${reservationId}`,
    headers: {
      'X-CSRF-Token': csrfToken,
      jwt,
    },
  });
}
