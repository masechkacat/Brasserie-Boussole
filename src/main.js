import { displayBeers } from "./thumbnails.js";

function fetchBeers(searchQuery = '') {
  let url = 'https://api.punkapi.com/v2/beers?per_page=10';
  if (searchQuery) {
    url += `&beer_name=${encodeURIComponent(searchQuery)}`;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => displayBeers(data))
    .catch(error => console.error('Error fetching data:', error));
}

// Добавьте обработчик событий для формы поиска
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchQuery = document.querySelector('input[type="search"]').value;
  fetchBeers(searchQuery);
});
fetchBeers();