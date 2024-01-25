import { displayBeers } from "./thumbnails.js";
import { displayNoResultsMessage, displayErrorMessage } from "./utiles.js";

function fetchBeers(searchQuery = '') {
  let url = 'https://api.punkapi.com/v2/beers?per_page=10';
  if (searchQuery) {
    url += `&beer_name=${encodeURIComponent(searchQuery)}`;
  }

  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      if (data.length === 0) {
        // Отображение сообщения, что по запросу ничего не найдено
        displayNoResultsMessage();
      } else {
        console.log(data);
        displayBeers(data);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Вы можете также отобразить сообщение об ошибке
      displayErrorMessage();
    });
}

// Обработчик событий для формы поиска
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchQuery = document.querySelector('input[type="search"]').value;
  fetchBeers(searchQuery);
});

fetchBeers();
