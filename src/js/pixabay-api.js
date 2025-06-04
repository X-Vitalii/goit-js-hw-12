import axios from 'axios';

const API_KEY = '50595955-e0b6c1995a30b33308caba1cc';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios('', { params }).then(({ data }) => {
    return data;
  });
}
