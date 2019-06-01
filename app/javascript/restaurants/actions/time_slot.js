/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BASE_URL from '../utils/base_url';

export function fetchTimeSlots(restaurantId, start, end) {
  return axios.get(`${BASE_URL}/restaurants/${restaurantId}/time_slots?start=${start}&end=${end}`);
}
