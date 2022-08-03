import axios from 'axios';
import PropTypes from 'prop-types';

export async function searchImages(searchWord, page) {
  const API_KEY = '28070761-d620d5c137a0a40b3f0efb4d6';
  const SEARCH_PARAMS = `?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  axios.defaults.baseURL = 'https://pixabay.com/api';

  return await axios.get(`/${SEARCH_PARAMS}`);
}

searchImages.propTypes = {
  searchWord: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
}