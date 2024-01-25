import { truncateText } from "./utiles.js";
import { showBeerModal } from "./modal.js";

function displayBeers(beers) {
  const beersContainer = document.getElementById('beer-list');
  beersContainer.innerHTML = ''; // Очистка предыдущих результатов

  beers.forEach(beer => {
    const beerElement = document.createElement('div');
    beerElement.className = 'col-lg-2';

    beerElement.innerHTML = `
        <div class="beer-card card border-primary">
            <img src="${beer.image_url}" class="card-img-top pt-2" alt="${beer.name}">
            <div class="card-body">
                <h5 class="card-title text-primary">${beer.name}</h5>
                <p class="card-text">${truncateText(beer.description, 80)}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <small class="text-muted">ABV: ${beer.abv}%</small>
                <button type="button" class="btn btn-outline-dark read-more-btn" data-beer-id="${beer.id}">
                  +info
                </button>
            </div>
        </div>
    `;

    beersContainer.appendChild(beerElement);
  });

  // Делегирование событий event delegation
  beersContainer.addEventListener('click', event => {
    if (event.target.classList.contains('read-more-btn')) {
      const beerId = event.target.dataset.beerId;
      const selectedBeer = beers.find(beer => beer.id.toString() === beerId);
      showBeerModal(selectedBeer);
    }
  });
}
export { displayBeers };

