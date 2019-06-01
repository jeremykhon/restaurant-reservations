/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BASE_URL from '../utils/base_url';

export function fetchRestaurants() {
  // const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  return axios.get(`${BASE_URL}/restaurants`);
}