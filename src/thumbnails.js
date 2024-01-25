import { truncateText } from "./utiles.js";
import { showBeerModal } from "./modal.js";

let beersData = [];

function createBeerElement(beer) {
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

  return beerElement;
}

function displayBeers(beers, observer) {
  const beersContainer = document.getElementById('beer-list');

  beersData = beers;

  beers.forEach(beer => {
    const beerElement = createBeerElement(beer);
    beersContainer.appendChild(beerElement);
  });

  const lastBeerElement = beersContainer.lastElementChild;
  if (lastBeerElement) {
    observer.observe(lastBeerElement);
  }
}

// Move event delegation outside of displayBeers
const beersContainer = document.getElementById('beer-list');
beersContainer.addEventListener('click', event => {
  if (event.target.classList.contains('read-more-btn')) {
    const beerId = event.target.dataset.beerId;
    const selectedBeer = beersData.find(beer => beer.id.toString() === beerId);
    showBeerModal(selectedBeer);
  }
});

export { displayBeers };
