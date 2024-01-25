import { truncateText } from "./utiles.js";

function displayBeers(beers) {
  const beersContainer = document.getElementById('beer-list');
  beersContainer.innerHTML = ''; // Очистка предыдущих результатов

  beers.forEach(beer => {
      const beerElement = document.createElement('div');
      beerElement.className = ' col-lg-2';


      beerElement.innerHTML = `
          <div class="beer-card card border-primary">
              <img src="${beer.image_url}" class="card-img-top pt-2" alt="${beer.name}">
              <div class="card-body">
                  <h5 class="card-title text-primary">${beer.name}</h5>
                  <p class="card-text">${truncateText(beer.description, 80)}</p>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                  <small class="text-muted">ABV: ${beer.abv}%</small>
                  <button type="button" class="btn btn-outline-dark">
                <svg width="16" height="16" fill="currentColor" class="bi bi-info-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
</svg>
                +info
              </button>
              </div>
          </div>
      `;

      beersContainer.appendChild(beerElement);
  });
}
export { displayBeers };
