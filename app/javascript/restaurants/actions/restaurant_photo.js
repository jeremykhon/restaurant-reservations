/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import BASE_URL from '../utils/base_url';

export function createRestaurantPhoto(restaurantId, formData, jwt) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  return axios({
    method: 'post',
    url: `${BASE_URL}/restaurants/${restaurantId}/restaurant_photos`,
    headers: {
      'X-CSRF-Token': csrfToken,
      jwt,
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
  });
}
