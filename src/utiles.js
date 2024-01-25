function truncateText(text, maxLength) {
  if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
  }
  return text;
}

function displayNoResultsMessage() {
  const container = document.getElementById('beer-list');
  container.innerHTML = '<p>Aucun résultat trouvé pour votre recherche.</p>';
}

function displayErrorMessage() {
  const container = document.getElementById('beer-list');
  container.innerHTML = '<p>Une erreur s\'est produite lors de la requête.</p>';
}

// Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
function debounce(func, delay) {
  let debounceTimeout;
  return function(...args) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      console.log("Debounced function is called");
      func.apply(this, args);
    }, delay);
  };
}


export { truncateText, displayNoResultsMessage, displayErrorMessage, debounce};
