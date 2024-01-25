function showBeerModal(beer) {
  document.querySelector('#beerModalLabel').textContent = beer.name;
  document.querySelector('#beerImage').src = beer.image_url;
  document.querySelector('#beerTagline').textContent = beer.tagline;
  document.querySelector('#beerDescription').textContent = beer.description;
  document.querySelector('#beerABV').textContent = beer.abv + '%';
  document.querySelector('#beerIBU').textContent = beer.ibu;
  // и так далее для остальных полей...

  // Подходит к еде
  const foodPairingList = document.querySelector('#beerFoodPairing');
  foodPairingList.innerHTML = beer.food_pairing.map(item => `<li>${item}</li>`).join('');

  // Советы пивовара
  document.querySelector('#beerTips').textContent = beer.brewers_tips;

  // Показать модальное окно
  new bootstrap.Modal(document.getElementById('beerModal')).show();
}

export { showBeerModal };
