/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BASE_URL from '../utils/base_url';

export function fetchRestaurants() {
  return axios.get(`${BASE_URL}/restaurants`);
}

export function fetchRestaurant(restaurantId) {
  return axios.get(`${BASE_URL}/restaurants/${restaurantId}`);
}
