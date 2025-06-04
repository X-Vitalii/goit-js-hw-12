import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const searchForm = document.querySelector('.form');
const galleryList = document.querySelector('.gallery');

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchValue = searchForm.elements['search-text'].value.trim();
  console.log(searchValue);
  console.dir(searchValue);

  if (searchValue === '') {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  // Clear previous results
  // galleryList.innerHTML = '';

  // Show loader
  showLoader();

  hideLoadMoreButton();

  getImagesByQuery(searchValue)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(error => {
      console.error('Search failed:', error);
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      // Hide loader after request finishes
      hideLoader();
      showLoadMoreButton();
      searchForm.reset();
    });
}
