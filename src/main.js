import { displayBeers } from "./thumbnails.js";
import { displayNoResultsMessage, displayErrorMessage, debounce } from "./utiles.js";

let currentPage = 1; // Текущая страница для пагинации
let currentSearchQuery = ''; // Текущий поисковый запрос
const perPage = 10; // Количество элементов на странице
const debouncedFetchBeers = debounce(fetchBeers, 500);

function fetchBeers(searchQuery = '', page = 1) {
  // Если это новый поисковый запрос, сбрасываем страницу и очищаем результаты
  if (currentSearchQuery !== searchQuery) {
    currentPage = 1;
    currentSearchQuery = searchQuery;
    document.getElementById('beer-list').innerHTML = '';
  }

  let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;
  if (searchQuery) {
    url += `&beer_name=${encodeURIComponent(searchQuery)}`;
  }

  fetch(url,  { cache: 'no-store' })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.length === 0) {
        if (currentPage === 1) {
          // Ничего не найдено только если это первая страница
          displayNoResultsMessage();
        } // Если это не первая страница, то просто нет больше данных для загрузки, и ничего не делаем
      } else {
        console.log(data);
        displayBeers(data, observer);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Вы можете также отобразить сообщение об ошибке
      displayErrorMessage();
    });
}

// Обработчик событий для формы поиска
document.querySelector('input[type="search"]').addEventListener('input', function() {
  debouncedFetchBeers(this.value);
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  const lastEntry = entries[entries.length - 1];
  if (lastEntry.isIntersecting) {
    observer.unobserve(lastEntry.target);
    fetchBeers(currentSearchQuery, currentPage++);
  }
}, { threshold: 0.5 });

document.querySelector('.scroll-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

fetchBeers();
